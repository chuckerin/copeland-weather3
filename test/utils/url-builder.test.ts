import { describe, test, expect } from 'vitest';

import {
  buildCityUrl,
  buildGeoCodesUrl,
  buildZipUrl,
} from '../../src/utils/url-builder';

describe('Test URL Builder', () => {
  test('Build City URL', () => {
    const city = 'Seattle';
    const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?appid=cf002751564a4c78f5f7ed479f1b9ba3&units=imperial&q=${city},us`;
    const actualUrl = buildCityUrl(city);
    expect(actualUrl).toEqual(expectedUrl);
  });

  test('Build Zip URL', () => {
    const zip = '62221';
    const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?appid=cf002751564a4c78f5f7ed479f1b9ba3&units=imperial&zip=${zip},us`;
    const actualUrl = buildZipUrl(zip);
    expect(actualUrl).toEqual(expectedUrl);
  });

  test('Build Geo Code URL', () => {
    const geoCodes = { lat: 64.8378, lon: -147.7164 };
    const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?appid=cf002751564a4c78f5f7ed479f1b9ba3&units=imperial&lat=${geoCodes.lat}&lon=${geoCodes.lon}`;
    const actualUrl = buildGeoCodesUrl(geoCodes.lat + ',' + geoCodes.lon);
    expect(actualUrl).toEqual(expectedUrl);
  });
});
