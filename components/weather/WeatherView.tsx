import { useState } from 'react';

// Components
import NextImage from 'next/image';

// Types
import type { Weather } from '@/lib/types';

type WeatherViewProps = {
  lat: number;
  long: number;
};

const WeatherView = (props: WeatherViewProps) => {
  const {
    lat,
    long,
  } = props;

  const [weather, setWeather] = useState<Weather | null>(null);

  return (
    <div>

    </div>
  );
};

export { WeatherView };
