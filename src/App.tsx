import { TabView, TabPanel } from 'primereact/tabview';
import { PrimeIcons } from 'primereact/api';

import Header from './components/Header';

import Footer from './components/Footer';
import './App.css';

function App() {
  function handleSubmit(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <div className='flex justify-content-center tab'>
        <form onSubmit={handleSubmit}>
          <TabView className='tab'>
            <TabPanel
              header='Zip Code&nbsp;'
              rightIcon={PrimeIcons.WAVE_PULSE}
            ></TabPanel>
            <TabPanel
              header='City&nbsp;'
              rightIcon={PrimeIcons.BUILDING}
            ></TabPanel>
            <TabPanel
              header='Geocode&nbsp;'
              rightIcon={PrimeIcons.GLOBE}
            ></TabPanel>
          </TabView>
        </form>
      </div>
      <div className='response-container'></div>
      <Footer />
    </>
  );
}

export default App;
