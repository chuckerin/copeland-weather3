import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import type { ChangeEventHandler } from 'react';

interface Props {
  cityInput: React.RefObject<HTMLInputElement>;
  isLoading: boolean;
  isCityInputValid: boolean;
  handleIsCityInputValid: ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CitySearch(props: Props) {
  const {
    cityInput,
    isLoading,
    isCityInputValid,
    handleIsCityInputValid,
    handleSubmit,
  } = props;

  return (
    <>
      <div className='flex flex-column gap-2 components'>
        <label htmlFor='city' className='label'>
          City Name
        </label>
        <InputText
          id='city'
          placeholder='Beverly Hills'
          className='p-inputtext-lg'
          ref={cityInput}
          onChange={handleIsCityInputValid}
        />
        <Button
          id='btnCity'
          onClick={handleSubmit}
          className='btn btn-secondary'
          disabled={!isCityInputValid || isLoading}
        >
          {isLoading ? 'Loading...' : 'Search'}
        </Button>
      </div>
      <div className='validation-message'>
        {/* {!isCityInputValid && (
          <small id='cityHelp' className='p-error'>
            Invalid City
          </small>
        )} */}
      </div>
    </>
  );
}

export default CitySearch;
