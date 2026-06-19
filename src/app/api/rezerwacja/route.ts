import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, checkIn, checkOut, roomSlug, roomName, guests, notes } = body;

    if (!firstName || !lastName || !email || !checkIn || !checkOut || !roomSlug) {
      return NextResponse.json({ error: "Brakuje wymaganych pól." }, { status: 400 });
    }

    const nights = Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    );

    const reservationNumber = `DB-${Date.now().toString(36).toUpperCase()}`;

    // Save to Supabase
    await supabase.from("reservations").insert({
      reservation_number: reservationNumber,
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone ?? null,
      check_in: checkIn,
      check_out: checkOut,
      room_slug: roomSlug,
      room_name: roomName,
      guests: guests ?? 2,
      notes: notes ?? null,
      payment_method: "cash",
      status: "pending",
    });

    // Send confirmation email to guest
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Dworek Biesiadny <rezerwacje@dworekbiesiadny.pl>",
        to: [email],
        subject: `Potwierdzenie rezerwacji ${reservationNumber} — Dworek Biesiadny`,
        html: buildConfirmationEmail({
          reservationNumber,
          firstName,
          lastName,
          checkIn,
          checkOut,
          roomName,
          guests,
          nights,
        }),
      });

      // Notify the hotel
      await resend.emails.send({
        from: "System rezerwacji <rezerwacje@dworekbiesiadny.pl>",
        to: ["info@dworek-biesiadny.pl"],
        subject: `Nowa rezerwacja ${reservationNumber} — ${firstName} ${lastName}`,
        html: buildAdminEmail({
          reservationNumber,
          firstName,
          lastName,
          email,
          phone,
          checkIn,
          checkOut,
          roomName,
          guests,
          nights,
          notes,
        }),
      });
    }

    return NextResponse.json({ success: true, reservationNumber });
  } catch (err) {
    console.error("Reservation error:", err);
    return NextResponse.json({ error: "Błąd serwera. Spróbuj ponownie." }, { status: 500 });
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function buildConfirmationEmail(data: {
  reservationNumber: string;
  firstName: string;
  lastName: string;
  checkIn: string;
  checkOut: string;
  roomName: string;
  guests: number;
  nights: number;
}) {
  return `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:#2d5a3d;padding:36px 40px;text-align:center;">
              <p style="margin:0;color:#c9a84c;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-family:sans-serif;">Dworek Biesiadny</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:28px;font-weight:normal;letter-spacing:1px;">W sercu natury</h1>
              <p style="margin:8px 0 0;color:#c9a84c;font-size:12px;font-family:sans-serif;">Radzewice, Wielkopolska</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 24px;">
              <p style="margin:0 0 8px;color:#c9a84c;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-family:sans-serif;">Potwierdzenie rezerwacji</p>
              <h2 style="margin:0 0 24px;color:#1d3a2d;font-size:22px;font-weight:normal;">Dziękujemy, ${data.firstName}!</h2>
              <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.7;font-family:sans-serif;">
                Twoja rezerwacja w Dworku Biesiadnym w Radzewicach została przyjęta.
                Poniżej znajdziesz szczegóły. W przypadku pytań skontaktuj się z nami.
              </p>

              <!-- Reservation box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;border-radius:12px;overflow:hidden;margin-bottom:24px;">
                <tr><td style="padding:24px 28px;">
                  <p style="margin:0 0 4px;color:#c9a84c;font-size:10px;letter-spacing:3px;text-transform:uppercase;font-family:sans-serif;">Numer rezerwacji</p>
                  <p style="margin:0 0 20px;color:#1d3a2d;font-size:22px;font-weight:bold;font-family:sans-serif;letter-spacing:2px;">${data.reservationNumber}</p>

                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom:14px;vertical-align:top;width:50%;">
                        <p style="margin:0 0 2px;color:#888;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-family:sans-serif;">Apartament</p>
                        <p style="margin:0;color:#1d3a2d;font-size:14px;font-family:sans-serif;font-weight:600;">${data.roomName}</p>
                      </td>
                      <td style="padding-bottom:14px;vertical-align:top;width:50%;">
                        <p style="margin:0 0 2px;color:#888;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-family:sans-serif;">Liczba gości</p>
                        <p style="margin:0;color:#1d3a2d;font-size:14px;font-family:sans-serif;font-weight:600;">${data.guests} ${data.guests === 1 ? "osoba" : data.guests < 5 ? "osoby" : "osób"}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:8px;vertical-align:top;width:50%;">
                        <p style="margin:0 0 2px;color:#888;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-family:sans-serif;">Check-in</p>
                        <p style="margin:0;color:#1d3a2d;font-size:14px;font-family:sans-serif;font-weight:600;">${formatDate(data.checkIn)}</p>
                        <p style="margin:2px 0 0;color:#888;font-size:11px;font-family:sans-serif;">od godz. 15:00</p>
                      </td>
                      <td style="padding-bottom:8px;vertical-align:top;width:50%;">
                        <p style="margin:0 0 2px;color:#888;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-family:sans-serif;">Check-out</p>
                        <p style="margin:0;color:#1d3a2d;font-size:14px;font-family:sans-serif;font-weight:600;">${formatDate(data.checkOut)}</p>
                        <p style="margin:2px 0 0;color:#888;font-size:11px;font-family:sans-serif;">do godz. 11:00</p>
                      </td>
                    </tr>
                  </table>

                  <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e0d8cc;">
                    <p style="margin:0 0 2px;color:#888;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-family:sans-serif;">Płatność</p>
                    <p style="margin:0;color:#1d3a2d;font-size:14px;font-family:sans-serif;font-weight:600;">Gotówka w dworku przy zameldowaniu</p>
                    <p style="margin:4px 0 0;color:#888;font-size:12px;font-family:sans-serif;">Pobyt: ${data.nights} ${data.nights === 1 ? "noc" : data.nights < 5 ? "noce" : "nocy"}</p>
                  </div>
                </td></tr>
              </table>

              <p style="margin:0 0 8px;color:#555;font-size:14px;line-height:1.7;font-family:sans-serif;">
                Skontaktujemy się z Tobą, aby potwierdzić dostępność i omówić szczegóły.
              </p>
            </td>
          </tr>
          <!-- Contact -->
          <tr>
            <td style="padding:0 40px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#2d5a3d;border-radius:12px;">
                <tr><td style="padding:20px 24px;">
                  <p style="margin:0 0 12px;color:#c9a84c;font-size:10px;letter-spacing:3px;text-transform:uppercase;font-family:sans-serif;">Kontakt</p>
                  <p style="margin:0 0 4px;color:#ffffff;font-size:13px;font-family:sans-serif;">📍 Długa 1B, 62-022 Radzewice</p>
                  <p style="margin:0 0 4px;color:#ffffff;font-size:13px;font-family:sans-serif;">📞 <a href="tel:+48691845079" style="color:#c9a84c;text-decoration:none;">+48 691 845 079</a></p>
                  <p style="margin:0;color:#ffffff;font-size:13px;font-family:sans-serif;">✉️ <a href="mailto:info@dworek-biesiadny.pl" style="color:#c9a84c;text-decoration:none;">info@dworek-biesiadny.pl</a></p>
                </td></tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background:#faf8f4;border-top:1px solid #ede8df;text-align:center;">
              <p style="margin:0;color:#aaa;font-size:11px;font-family:sans-serif;">
                © 2025 Dworek Biesiadny w Radzewicach · <a href="https://dworekbiesiadny.pl" style="color:#2d5a3d;text-decoration:none;">dworekbiesiadny.pl</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildAdminEmail(data: {
  reservationNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  checkIn: string;
  checkOut: string;
  roomName: string;
  guests: number;
  nights: number;
  notes?: string;
}) {
  return `
<html><body style="font-family:sans-serif;padding:24px;color:#333;">
  <h2 style="color:#2d5a3d;">Nowa rezerwacja: ${data.reservationNumber}</h2>
  <table style="border-collapse:collapse;width:100%;max-width:500px;">
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;width:160px;">Gość</td><td style="padding:8px 0;border-bottom:1px solid #eee;">${data.firstName} ${data.lastName}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;">E-mail</td><td style="padding:8px 0;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;">Telefon</td><td style="padding:8px 0;border-bottom:1px solid #eee;">${data.phone ?? "—"}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;">Apartament</td><td style="padding:8px 0;border-bottom:1px solid #eee;">${data.roomName}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;">Check-in</td><td style="padding:8px 0;border-bottom:1px solid #eee;">${formatDate(data.checkIn)}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;">Check-out</td><td style="padding:8px 0;border-bottom:1px solid #eee;">${formatDate(data.checkOut)}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;">Liczba nocy</td><td style="padding:8px 0;border-bottom:1px solid #eee;">${data.nights}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;">Goście</td><td style="padding:8px 0;border-bottom:1px solid #eee;">${data.guests}</td></tr>
    <tr><td style="padding:8px 0;font-weight:600;">Uwagi</td><td style="padding:8px 0;">${data.notes ?? "—"}</td></tr>
  </table>
  <p style="margin-top:20px;color:#2d5a3d;font-size:13px;">Płatność: Gotówka w dworku</p>
</body></html>`;
}
