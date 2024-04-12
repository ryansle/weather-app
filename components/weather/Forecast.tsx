// Components
import NextImage from 'next/image';

// Types
import { Weather } from '@/lib/types';

type ForecastProps = {
  forecast: Weather
};

const Forecast = (props: ForecastProps) => {
  const {
    temp,
    city_name,
    app_temp,
    wind_spd,
    wind_cdir_full,
    weather: { description, icon }
  } = props.forecast

  const imageUrl = `https://cdn.weatherbit.io/static/img/icons/${icon}.png`

  console.log(imageUrl)

  return (
    <div className='border rounded-lg p-4 space-y-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold text-2xl'>
            {city_name}
          </h1>
          <div className='flex items-center'>
            <NextImage
              src={imageUrl}
              width={30}
              height={30}
              alt={description}
            />
            <p className='text-left'>
              {description}
            </p>
          </div>
        </div>

        <div className='text-right'>
          <h1 className='text-4xl font-bold'>
            {temp}º
          </h1>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div>
          <p>
            Wind speeds of {wind_spd} mph in the {wind_cdir_full} direction
          </p>
        </div>
        <div>
          <p>Feels like {app_temp}º</p>
        </div>
      </div>
    </div>
  );
};

export { Forecast };
