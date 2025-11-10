import { Card } from 'primereact/card';
import type { WeatherItem } from '../utils/types';

interface Props {
  weatherItemState: WeatherItem | null;
  requestErrorState: boolean;
  isLoading: boolean;
}

function CurrentWeather(props: Props) {
  const { weatherItemState, requestErrorState, isLoading } = props;

  // console.log('weatherItemState', weatherItemState);
  // console.log('requestErrorState', requestErrorState);
  // console.log('isLoading', isLoading);

  // if (!weatherItemState) return null;

  // const { city, temperature, geoCode } = weatherItemState;
  // const { lat, lon } = geoCode;
  const city = props.weatherItemState?.city;
  const temperature = props.weatherItemState?.temperature;
  const geoCode = props.weatherItemState?.geoCode;
  const lat = geoCode?.lat;
  const lon = geoCode?.lon;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {requestErrorState && !isLoading && (
        <div className='error'>No Weather found for search entry</div>
      )}
      {weatherItemState && !requestErrorState && !isLoading && (
        <Card title='Current Weather' subTitle={city} footer={lat + ',' + lon}>
          <div className='curent-weather'>
            {/* <div>
            <label className='response-label'>City: </label>{' '}
            <span className='response-value'>{city}</span>
          </div> */}
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
