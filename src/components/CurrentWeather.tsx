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
      // localStorage.removeItem('favLocation');
      localStorage.setItem('favLocation', '');
      setHasFav(false);
      console.log(
        'hasFav b4',
        hasFav,
        'favLocation b4',
        localStorage.getItem('favLocation'),
        'city b4',
        city
      );
    } else {
      // localStorage.setItem('favLocation', city ?? '');
      setHasFav(false);
      // console.log(
      //   'hasFav b4',
      //   hasFav,
      //   'favLocation b4',
      //   localStorage.getItem('favLocation'),
      //   'city b4',
      //   city
      // );
      await setLocalStorage(city ?? '').then(() => {
        setHasFav(true);
        // console.log(
        //   'hasFav aft',
        //   hasFav,
        //   'favLocation aftr',
        //   localStorage.getItem('favLocation'),
        //   'city after',
        //   city
        // );
      });
    }
  }

  useEffect(() => {
    // This code runs only once after the component mounts
    // console.log('MyComponent has mounted!');
    const favCity = localStorage.getItem('favLocation');
    if (favCity === null) return;
    // console.log('favCity', favCity);
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
    // You can perform data fetching, set up subscriptions, etc. here
  }, []); // Empty dependency array ensures it runs only on mount

  // setState will not update for new fav cities without this useEffect
  // it's hacky but works
  useEffect(() => {}, [hasFav]);

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
      {/* <FavWeather /> */}
    </>
  );
}

export default CurrentWeather;
