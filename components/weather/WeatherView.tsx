import { useState, useEffect } from 'react';

// Types
import type { Location, Weather } from '@/lib/types';
import { Forecast } from '@/components/weather';

type WeatherViewProps = {
  location: Location;
};

const WeatherView = (props: WeatherViewProps) => {
  const { location } = props;

  const [weather, setWeather] = useState<Weather[] | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (location) {
        const apiKey = process.env.NEXT_PUBLIC_BACKUP_WEATHERBIT_API_KEY;

        const lat = location.geometry.coordinates[1];
        const long = location.geometry.coordinates[0];

        const weather = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${apiKey}&include=minutely`);

        const result = await weather.json();
        setWeather(result.data);
      }
    };

    fetchWeather();
  }, [location]);

  console.log(weather);

  return (
    <div>
      {weather?.map((item, index) => (
        <Forecast
          key={index}
          forecast={item}
        />
      ))}
    </div>
  );
};

export { WeatherView };
