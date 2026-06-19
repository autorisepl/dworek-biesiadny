-- URUCHOM TEN SQL W SUPABASE DASHBOARD → SQL EDITOR
-- Projekt: qrhtytgxbxsvifzjrsgr

CREATE TABLE IF NOT EXISTS reservations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  reservation_number text NOT NULL UNIQUE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  check_in date NOT NULL,
  check_out date NOT NULL,
  room_slug text NOT NULL,
  room_name text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  notes text,
  payment_method text NOT NULL DEFAULT 'cash',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON reservations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow service reads" ON reservations
  FOR SELECT USING (true);
