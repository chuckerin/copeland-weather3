import { describe, test, expect } from 'vitest';

import {
  regexCityPattern,
  regexGeocodePattern,
  regexNoSpacesPattern,
} from '../../src/utils/regex-patterns';

describe('Test City Pattern Regex', () => {
  test('Regex "Belleville" against city pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexCityPattern.test('Belleville');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "Fairbanks" against city pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexCityPattern.test('FaIrBaNkS');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "Salt Lake City" against city pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexCityPattern.test('Salt Lake City');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "Milton-Freewater" against city pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexCityPattern.test('Milton-Freewater');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "St. Louis" against city pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexCityPattern.test('St. Louis');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "#" against city pattern for false', () => {
    const expectedAnswer = false;
    const actualAnswer = regexCityPattern.test('#');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "@tlanta" against city pattern for false', () => {
    const expectedAnswer = false;
    const actualAnswer = regexCityPattern.test('@tlanta');
    expect(expectedAnswer).toEqual(actualAnswer);
  });
});

describe('Test Geocode Pattern Regex', () => {
  test('Regex "38.5396,-89.9583" against geocode pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexGeocodePattern.test('38.5396,-89.9583');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "64.8378,-147.7164" against geocode pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexGeocodePattern.test('64.8378,-147.7164');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "40.7608,-111.8911" against geocode pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexGeocodePattern.test('40.7608,-111.8911');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "45.9326,-118.3877" against geocode pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexGeocodePattern.test('45.9326,-118.3877');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "38.6273,-90.1979" against geocode pattern for true', () => {
    const expectedAnswer = true;
    const actualAnswer = regexGeocodePattern.test('38.6273,-90.1979');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "-125/85" against geocode pattern for false', () => {
    const expectedAnswer = false;
    const actualAnswer = regexGeocodePattern.test('-125/85');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "38.6273, -90.1979" against geocode pattern for false', () => {
    const expectedAnswer = false;
    const actualAnswer =
      regexNoSpacesPattern.test('38.6273, -90.1979') &&
      regexGeocodePattern.test('38.6273, -90.1979');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "asdf,-90.1979" against geocode pattern for false', () => {
    const expectedAnswer = false;
    const actualAnswer =
      regexNoSpacesPattern.test('asdf,,-90.1979') &&
      regexGeocodePattern.test('asdf,,-90.1979');
    expect(expectedAnswer).toEqual(actualAnswer);
  });

  test('Regex "90.1979asdf" against geocode pattern for false', () => {
    const expectedAnswer = false;
    const actualAnswer =
      regexNoSpacesPattern.test('90.1979asdf') &&
      regexGeocodePattern.test('90.1979asdf');
    expect(expectedAnswer).toEqual(actualAnswer);
  });
});
