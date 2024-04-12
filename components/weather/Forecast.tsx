type ForecastProps = {
  temp: number;
  city: string;
  feelsLike: number;
  windSpeed: number;
  windDirection: string;
  description: string;
};

const Forecast = (props: ForecastProps) => {
  const {
    temp,
    city,
    feelsLike,
    windSpeed,
    windDirection,
    description
  } = props;

  return (
    <div className='border rounded-xl'>

    </div>
  );
};

export { Forecast };
