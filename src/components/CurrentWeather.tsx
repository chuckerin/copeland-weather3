import { Card } from 'primereact/card';
import type { WeatherItem } from '../utils/types';
import { Button } from 'primereact/button';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import fetchFavWeather from '../actions/fetch-fav-weather';
import setLocalStorage from '../utils/local-storage';

interface Props {
  weatherItem: WeatherItem | null;
  setWeatherItem: Dispatch<SetStateAction<WeatherItem | null>>;
  requestError: boolean;
  isLoading: boolean;
}

function CurrentWeather(props: Props) {
  const { weatherItem, setWeatherItem, requestError, isLoading } = props;
  const [hasFav, setHasFav] = useState(false);

  const city = props.weatherItem?.city;
  const temperature = props.weatherItem?.temperature;
  const geoCode = props.weatherItem?.geoCode;
  const lat = geoCode?.lat;
  const lon = geoCode?.lon;

  async function handleLikeClick() {
    if (hasFav && localStorage.getItem('favLocation') === city) {
      localStorage.setItem('favLocation', '');
      setHasFav(false);
    } else {
      setHasFav(false);
      await setLocalStorage(city ?? '').then(() => {
        setHasFav(true);
      });
    }
  }

  useEffect(() => {
    console.log('mounting');
    const favCity = localStorage.getItem('favLocation');
    if (favCity === null) return;

    if (favCity !== '') {
      setHasFav(true);
      fetchFavWeather(favCity).then((response) => {
        if (!response) return;

        const weatherItem: WeatherItem = {
          city: response.data.name,
          temperature: response.data.main.temp + '°f',
          geoCode: {
            lat: response.data.coord.lat,
            lon: response.data.coord.lon,
          },
        };
        setWeatherItem(weatherItem);
      });
    }
  }, [setWeatherItem]); // Empty dependency array ensures it runs only on mount

  // setState will not update for new fav cities without this useEffect
  // it's hacky but works
  useEffect(() => {
    console.log('hasFav', hasFav);
  }, [hasFav]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {requestError && !isLoading && (
        <div className='error'>No Weather found for search entry</div>
      )}
      {weatherItem && !requestError && !isLoading && (
        <Card title='Current Weather' footer={lat + ',' + lon}>
          <div className='curent-weather'>
            <div>
              <label className='response-label'>City: </label>{' '}
              <span className='response-value'>{city}</span>
              <Button
                id='fav'
                icon={
                  hasFav && localStorage.getItem('favLocation') === city
                    ? 'pi pi-heart-fill pi-spin btn-fill'
                    : 'pi pi-heart pi-spin btn-fill'
                }
                rounded
                text
                severity='help'
                aria-label='Favorite'
                onClick={handleLikeClick}
              />
            </div>
            <div>
              <label className='response-label'>Temperature: </label>{' '}
              <span className='response-value'>{temperature}</span>
            </div>
            <div>
              <label className='response-label'>Latitude: </label>{' '}
              <span className='response-value'>{lat}</span>
            </div>
            <div>
              <label className='response-label'>Longitude: </label>{' '}
              <span className='response-value'>{lon}</span>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}

export default CurrentWeather;
