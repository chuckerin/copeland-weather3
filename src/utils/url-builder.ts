import { BASE_URL } from './constants';

export function buildCityUrl(city: string): string {
  // City is the only field that needs to account for special characters
  const encodedUrl = encodeURIComponent(city);
  return `${BASE_URL}&q=${encodedUrl},us`;
}

export function buildZipUrl(zip: string): string {
  return `${BASE_URL}&zip=${zip},us`;
}

export function buildGeoCodesUrl(geoCode: string): string {
  const [lat, lon] = geoCode.split(',');
  return `${BASE_URL}&lat=${lat}&lon=${lon}`;
}
