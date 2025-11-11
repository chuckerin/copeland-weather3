import { useRef, useState } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';
import { PrimeIcons } from 'primereact/api';
import axios from 'axios';

import type { WeatherItem } from './utils/types';
import {
  buildCityUrl,
  buildGeoCodesUrl,
  buildZipUrl,
} from './utils/url-builder';

import Header from './components/Header';
import Footer from './components/Footer';

import ZipCodeSearchMask from './components/ZipCodeSearchMask';
import type { InputMaskChangeEvent } from 'primereact/inputmask';
import CitySearch from './components/CitySearch';
import GeoCodeSearch from './components/GeoCodeSearch';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // Try out an InputMask, can't use useRef, so gotta use useState
  const [zipCodeInput, setZipCodeInput] = useState('');
  const [isZipCodeInputValid, setIsZipCodeInputValid] = useState(false);
  function handleZipCodeInputChange(event: InputMaskChangeEvent) {
    const val = event.target?.value;

    if ((val === null || val === undefined) ?? val.includes('_')) {
      setIsZipCodeInputValid(false);
    }
    setZipCodeInput(val!);
  }

  // useRefs for the InputText fields
  const cityInput = useRef<HTMLInputElement>(null!);
  const [isCityInputValid, setIsCityInputValid] = useState(false);
  function handleIsCityInputValid() {
    setIsCityInputValid(cityInput.current?.value.length > 0);
  }
  const geoCodeInput = useRef<HTMLInputElement>(null!);
  const [isGeoCodeInputValid, setIsGeoCodeInputValid] = useState(false);
  function handleIsGeoCodeInputValid() {
    setIsGeoCodeInputValid(geoCodeInput.current?.value.length > 0);
  }

  // State for if request errors out
  const [requestError, setRequestError] = useState(false);

  // State for the current weather item
  const [weatherItem, setWeatherItem] = useState<WeatherItem | null>(null);

  function handleSubmit(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    // account for the 2 InputText fields currents being null
    const geoCode =
      geoCodeInput.current !== null ? geoCodeInput.current.value : '';
    const city = cityInput.current !== null ? cityInput.current.value : '';

    fetchWeather(event, city, zipCodeInput, geoCode).then((response) => {
      if (!response) {
        setRequestError(true);
        return;
      } else {
        setRequestError(false);
      }
      const weatherItem: WeatherItem = {
        city: response.data.name,
        temperature: response.data.main.temp + '°f',
        geoCode: {
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
        },
      };
      setWeatherItem(weatherItem);

      console.log('API Response:', response.data);
      console.log('Weather Item:', weatherItem);
    });
  }

  async function fetchWeather(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
    cityInput: string,
    zipCodeInput: string,
    geoCodeInput: string
  ) {
    setIsLoading(true);
    const buttonId = (event.target as HTMLButtonElement).id;
    let url = '';
    if (buttonId === 'btnCity') {
      url = buildCityUrl(cityInput);
    } else if (buttonId === 'btnZip') {
      url = buildZipUrl(zipCodeInput);
    } else {
      url = buildGeoCodesUrl(geoCodeInput);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second

    const response = await axios
      .get(url)
      .catch((error) => {
        if (error.response) {
          console.log('Axios Error');
        }
      })
      .finally(() => setIsLoading(false));

    console.log('Axios Resp -> ', response);

    return response;
  }

  return (
    <>
      <Header />
      <div className='flex justify-content-center tab'>
        <form onSubmit={handleSubmit}>
          <TabView className='tab'>
            <TabPanel header='Zip Code&nbsp;' rightIcon={PrimeIcons.WAVE_PULSE}>
              <ZipCodeSearchMask
                zipCodeInput={zipCodeInput}
                isZipCodeInputValid={isZipCodeInputValid}
                setIsZipCodeInputValid={setIsZipCodeInputValid}
                handleZipCodeInputChange={handleZipCodeInputChange}
                isLoading={isLoading}
                handleSubmit={handleSubmit}
              />
            </TabPanel>
            <TabPanel header='City&nbsp;' rightIcon={PrimeIcons.BUILDING}>
              <CitySearch
                cityInput={cityInput}
                isLoading={isLoading}
                isCityInputValid={isCityInputValid}
                handleIsCityInputValid={handleIsCityInputValid}
                handleSubmit={handleSubmit}
              />
            </TabPanel>
            <TabPanel header='Geocode&nbsp;' rightIcon={PrimeIcons.GLOBE}>
              <GeoCodeSearch
                geoCodeInput={geoCodeInput}
                isLoading={isLoading}
                isGeoCodeInputValid={isGeoCodeInputValid}
                handleIsGeoCodeInputValid={handleIsGeoCodeInputValid}
                handleSubmit={handleSubmit}
              />
            </TabPanel>
          </TabView>
        </form>
      </div>
      <div className='response-container'>
        <CurrentWeather
          weatherItemState={weatherItem}
          requestErrorState={requestError}
          isLoading={isLoading}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
