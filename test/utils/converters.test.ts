import { describe, test, expect } from 'vitest';

import { kelvinToFahrenheit } from '../../src/utils/converters';

describe('Test Converters', () => {
  test('Convert 300 Kelvin to 80 Fahrenheit', () => {
    const expectedFahrenheit = 80;
    const actualFahrenheit = kelvinToFahrenheit(300);
    expect(actualFahrenheit).toEqual(expectedFahrenheit);
  });

  test('Convert 273.15 Kelvin to 32 Fahrenheit', () => {
    const expectedFahrenheit = 32;
    const actualFahrenheit = kelvinToFahrenheit(273.15);
    expect(actualFahrenheit).toEqual(expectedFahrenheit);
  });

  test('Convert 310.15 Kelvin to 99 Fahrenheit', () => {
    const expectedFahrenheit = 99;
    const actualFahrenheit = kelvinToFahrenheit(310.15);
    expect(actualFahrenheit).toEqual(expectedFahrenheit);
  });

  test('Convert 0 Kelvin to -460 Fahrenheit', () => {
    const expectedFahrenheit = -460;
    const actualFahrenheit = kelvinToFahrenheit(0);
    expect(actualFahrenheit).toEqual(expectedFahrenheit);
  });
});
