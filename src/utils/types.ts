export type GeoCode = {
  lat: string;
  lon: string;
};

export type WeatherItem = {
  city: string;
  temperature: string;
  geoCode: GeoCode;
};
