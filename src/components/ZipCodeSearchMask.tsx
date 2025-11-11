import { InputMask, type InputMaskChangeEvent } from 'primereact/inputmask';
import { Button } from 'primereact/button';

interface Props {
  zipCodeInput: string | null;
  isZipCodeInputValid: boolean;
  setIsZipCodeInputValid: (value: boolean) => void;
  handleZipCodeInputChange: (event: InputMaskChangeEvent) => void;
  isLoading: boolean;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ZipCodeSearchMask(props: Props) {
  const {
    zipCodeInput,
    isZipCodeInputValid,
    setIsZipCodeInputValid,
    handleZipCodeInputChange,
    isLoading,
    handleSubmit,
  } = props;

  return (
    <>
      <div className='flex flex-column gap-2 components'>
        <label htmlFor='zipCode' className='label'>
          Zip Code
        </label>
        <InputMask
          id='zipCode'
          placeholder='90210'
          value={zipCodeInput}
          onChange={handleZipCodeInputChange}
          mask='99999'
          onComplete={() => {
            setIsZipCodeInputValid(true);
          }}
          className={
            !isZipCodeInputValid && (zipCodeInput?.length ?? 0) > 0
              ? 'p-invalid p-inputtext-lg'
              : 'p-inputtext-lg'
          }
        />
        <Button
          id='btnZip'
          onClick={handleSubmit}
          className='btn btn-secondary'
          disabled={!isZipCodeInputValid || isLoading}
        >
          {isLoading ? 'Loading...' : 'Search'}
        </Button>
      </div>
      <div className='validation-message'>
        {!isZipCodeInputValid && (zipCodeInput?.length ?? 0) > 0 && (
          <small id='zipHelp' className='p-error'>
            Invalid zip code format
          </small>
        )}
      </div>
    </>
  );
}

export default ZipCodeSearchMask;
