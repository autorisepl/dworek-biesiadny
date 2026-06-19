"use client";

import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer, Eye, Droplets } from "lucide-react";

interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
  humidity: number;
}

function getWeatherInfo(code: number): { label: string; Icon: React.ComponentType<{ className?: string }> } {
  if (code === 0) return { label: "Słonecznie", Icon: Sun };
  if (code <= 3) return { label: "Pochmurnie", Icon: Cloud };
  if (code <= 67) return { label: "Deszcz", Icon: CloudRain };
  if (code <= 77) return { label: "Śnieg", Icon: CloudSnow };
  if (code <= 99) return { label: "Burza", Icon: CloudRain };
  return { label: "Zmiennie", Icon: Cloud };
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Radzewice, Wielkopolska — lat: 52.163, lon: 16.919
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.163&longitude=16.919&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&wind_speed_unit=kmh&timezone=Europe%2FWarsaw"
    )
      .then((r) => r.json())
      .then((data) => {
        const c = data.current;
        setWeather({
          temperature: Math.round(c.temperature_2m),
          windspeed: Math.round(c.wind_speed_10m),
          weathercode: c.weather_code,
          humidity: c.relative_humidity_2m,
        });
      })
      .catch(() => setWeather(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg animate-pulse">
        <div className="w-4 h-4 bg-white/20 rounded" />
        <div className="w-12 h-3 bg-white/20 rounded" />
      </div>
    );
  }

  if (!weather) return null;

  const { label, Icon } = getWeatherInfo(weather.weathercode);

  return (
    <div className="flex items-center gap-3 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/15 text-white">
      <Icon className="w-4 h-4 text-accent shrink-0" />
      <span className="font-body text-sm font-medium">{weather.temperature}°C</span>
      <span className="font-body text-xs text-white/60 hidden sm:inline">{label}</span>
      <div className="hidden lg:flex items-center gap-1 text-white/50 border-l border-white/15 pl-3">
        <Wind className="w-3 h-3" />
        <span className="font-body text-xs">{weather.windspeed} km/h</span>
      </div>
    </div>
  );
}

// Larger standalone widget for use in hero or about section
export function WeatherWidgetFull() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const t = setInterval(updateTime, 60000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.163&longitude=16.919&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&wind_speed_unit=kmh&timezone=Europe%2FWarsaw"
    )
      .then((r) => r.json())
      .then((data) => {
        const c = data.current;
        setWeather({
          temperature: Math.round(c.temperature_2m),
          windspeed: Math.round(c.wind_speed_10m),
          weathercode: c.weather_code,
          humidity: c.relative_humidity_2m,
        });
      })
      .catch(() => setWeather(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading || !weather) {
    return (
      <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-lg px-6 py-4 animate-pulse">
        <div className="w-10 h-10 bg-gray-100 rounded-xl" />
        <div>
          <div className="w-16 h-5 bg-gray-100 rounded mb-1" />
          <div className="w-24 h-3 bg-gray-100 rounded" />
        </div>
      </div>
    );
  }

  const { label, Icon } = getWeatherInfo(weather.weathercode);

  return (
    <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-md border border-cream px-6 py-4">
      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-3xl font-bold text-primary-dark">{weather.temperature}°C</span>
          <span className="font-body text-sm text-gray-500">{label}</span>
        </div>
        <p className="font-body text-xs text-gray-400 mt-0.5">
          Radzewice, teraz{time ? ` · ${time}` : ""}
        </p>
      </div>
      <div className="border-l border-cream pl-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 font-body text-xs text-gray-500">
          <Droplets className="w-3.5 h-3.5 text-primary/60" />
          <span>{weather.humidity}% wilgotność</span>
        </div>
        <div className="flex items-center gap-1.5 font-body text-xs text-gray-500">
          <Wind className="w-3.5 h-3.5 text-primary/60" />
          <span>{weather.windspeed} km/h wiatr</span>
        </div>
        <div className="flex items-center gap-1.5 font-body text-xs text-gray-500">
          <Eye className="w-3.5 h-3.5 text-primary/60" />
          <span>Dobra widoczność</span>
        </div>
      </div>
    </div>
  );
}
