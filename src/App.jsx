import { useState } from 'react'
import { Nav, WeatherInfo } from './components'
import useWeatherInfo  from './Hooks/useWeatherInfo';
function App() {
  const [searchValue, setSearchValue] = useState("Kathmandu"); // Store searched city name
  const weatherData = useWeatherInfo(searchValue);
 
  return (
    <>
    <Nav setSearchValue={setSearchValue}/>
    <WeatherInfo weatherData = {weatherData}/>
    </>
  )
}

export default App
