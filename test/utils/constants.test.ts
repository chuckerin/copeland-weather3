import { describe, test, expect } from 'vitest';

import { BASE_URL } from '../../src/utils/constants';

describe('Test Constants', () => {
  test('BASE_URL is correctly defined', () => {
    const expectedBaseUrl =
      'https://api.openweathermap.org/data/2.5/weather?appid=cf002751564a4c78f5f7ed479f1b9ba3&units=imperial';
    expect(BASE_URL).toEqual(expectedBaseUrl);
  });
});
