export const kelvinToFahrenheit = (kelvinTemp: number): number =>
  Math.round(((kelvinTemp - 273.15) * 9) / 5 + 32);
