import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather'
import Forecast from './components/forecast/forecast'
//import CurrentUsdCop from './components/current-parity/current-usd-cop-price'
import {WEATHER_API_URL,WEATHER_API_KEY,FOREX_API_URL,FOREX_API_OPTIONS} from './api';
import {useState} from 'react';

function App() {
  

  const [currentWeather,setCurrentWeather] = useState(null);
  const [forecastWeather,setForecastWeather] = useState(null);
  //const [currentExchange,setCurrentExchange] = useState(null);
  

  const handleOnSearchChange = (searchData) => {
    
    const [lat,lon] =  searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=es`)
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=es`)

    Promise.all([currentWeatherFetch,forecastWeatherFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label , ...weatherResponse});
      setForecastWeather({city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
  }
  
  /*
  const currentExchangeFetch = fetch(`${FOREX_API_URL}/query?from_currency=USD&function=CURRENCY_EXCHANGE_RATE&to_currency=COP`, FOREX_API_OPTIONS)
  .then(res=>res.json())
  .then(response=>{
    setCurrentExchange(currentExchangeFetch)
  })
*/
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <div>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
        
      </div>
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
/*
{currentExchange && <CurrentUsdCop data={currentExchange} />}


*/