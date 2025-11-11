import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import type { ChangeEventHandler } from 'react';

interface Props {
  geoCodeInput: React.RefObject<HTMLInputElement>;
  isLoading: boolean;
  isGeoCodeInputValid: boolean;
  handleIsGeoCodeInputValid: ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function GeoCodeSearch(props: Props) {
  const {
    geoCodeInput,
    isLoading,
    isGeoCodeInputValid,
    handleIsGeoCodeInputValid,
    handleSubmit,
  } = props;

  const geoCode =
    geoCodeInput.current !== null ? geoCodeInput.current.value : '';

  return (
    <>
      <div className='flex flex-column gap-2 components'>
        <label htmlFor='geocode' className='label'>
          Lat,Lon
        </label>
        <InputText
          id='geocode'
          placeholder='34.0736,-118.4004'
          className='p-inputtext-lg'
          ref={geoCodeInput}
          onChange={handleIsGeoCodeInputValid}
        />
        <Button
          id='btnGeocode'
          onClick={handleSubmit}
          className='btn btn-secondary'
          disabled={!isGeoCodeInputValid || isLoading}
        >
          {isLoading ? 'Loading...' : 'Search'}
        </Button>
      </div>
      <div className='validation-message'>
        {!isGeoCodeInputValid && (geoCode.length ?? 0) > 0 && (
          <small id='geCodeHelp' className='p-error'>
            Invalid characters in GeoCode
          </small>
        )}
      </div>
    </>
  );
}

export default GeoCodeSearch;
