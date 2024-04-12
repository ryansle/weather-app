export type Location = {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: {
    mapbox_id: string;
    wikidata: string;
    short_code: string;
  };
  text: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: {
    type: string;
    coordinates: number[];
  };
  context: {
    id: string;
    mapbox_id: string;
    wikidata: string;
    text: string;
  }[];
};

export type Weather = {
  wind_cdir: string;
  rh: number;
  pod: string;
  lon: number;
  pres: number;
  timezone: string;
  ob_time: Date;
  country_code: string;
  clouds: number;
  vis: number;
  wind_spd: number;
  gust: number;
  wind_cdir_full: string;
  app_temp: number;
  state_code: string;
  ts: number;
  h_angle: number;
  dewpt: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  uv: number;
  aqi: number;
  station: number;
  sources: string[];
  wind_dir: number;
  elev_angle: number;
  datetime: Date;
  precip: number;
  ghi: number;
  dni: number;
  dhi: number;
  solar_rad: number;
  city_name: string;
  sunrise: string;
  sunset: string;
  temp: number;
  lat: number;
  slp: number;
};