import React from "react";

function WeatherInfo({ weatherData }) { 
    if (!weatherData) {
        console.log("Weather data is loading...");
      } else {
        // console.log(weatherData);
        var cityName = weatherData.name;
        var temp = weatherData.main.temp;
        var humidity = weatherData.main.humidity;
        var windSpeed =weatherData.wind.speed;
        var windDirection = weatherData.wind.deg; // Corrected
        var pressure = weatherData.main.pressure;
        var visibility = weatherData.visibility;
        var imgSrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`; // Corrected
        var description = weatherData.weather[0].description;
    
        // console.log(cityName, temp, humidity, windSpeed, windDirection, pressure, visibility, imgSrc, description);

        // console.log(weatherData.wind);
      }
   

  return <>
     <div className="flex mt-12">
            <div className="w-5/6 mt-2 bg-gray-400 text-white h-[26rem] mx-10 flex flex-row pt-12">
                <div className="mx-12 mt-10">
                    <h1 className="text-7xl font-normal">Today</h1>
                    <h3 className="text-4xl mt-3 font-normal max-w-80 " id="city">{cityName}</h3>
                </div>
                <div className="p-4 bg-gray-300  h-52 w-80 mr-12 mt-10 ml-auto">
                    <div className="flex flex-col">
                        <a className=" text-8xl text-white  mx-auto"><img id="weather-icon" src={imgSrc}></img>
                        </a>
                        <h1 className="font-bold text-2xl text-center text-gray-950" id="temperature">{temp}°C</h1>
                    </div>
                    <h1 className="mx-6 my-4 text-3xl font-bold text-gray-950 text-center" id="weatherDescription">{description}</h1>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="p-4 bg-gray-300  h-42 w-52 mx-12">
                    <div>
                        <a className=" flex text-6xl text-gray-450 justify-center "><i className="fa-solid fa-droplet"></i>
                        </a>
                        <h1 className="font-bold text-xl mt-6 text-center text-gray-950" id="humidity">{humidity} %</h1>
                    </div>
                    <h1 className="ml-8 my-2 text-xl font-bold text-gray-950 text-center">Humidity</h1>
                </div>
                <div className="p-4 bg-gray-300  h-42 w-52  mx-12 ">
                    <div>
                        <a className=" flex text-6xl text-gray-450 justify-center"><i className="fa-solid fa-wind"></i>
                        </a>
                        <h1 className="font-bold text-xl mt-6 ml-12 text-gray-950 textg-center" id="wind">{windSpeed} m/s</h1>
                    </div>
                    <h1 className="text-center ml-8 my-2 text-xl font-bold text-gray-950">Wind Speed</h1>

                </div>
                <div className="p-4 bg-gray-300 h-42 w-52 mt-12  mx-12">
                    <div>
                        <a className=" flex text-6xl text-gray-450 justify-center "><i className="fa-solid fa-gauge"></i>
                        </a>
                        <h1 className="font-bold text-xl mt-6 text-center text-gray-950" id="pressure">{pressure} hPa</h1>
                    </div>
                    <h1 className="ml-8 my-2 text-xl font-bold text-gray-950 text-center">Pressure</h1>
                </div>
                <div className="p-4 bg-gray-300  h-42 w-52 mt-12  mx-12 ml-14">
                    <div>
                        <a className="flex text-6xl text-gray-450 justify-center"><i className="fa-regular fa-eye"></i>
                        </a>
                        <h1 className="font-bold text-xl mt-6  text-center text-gray-950" id="visibility">{visibility /1000} km</h1>
                    </div>
                    <h1 className="ml-8 my-2 text-xl font-bold text-gray-950 text-center">Visibility</h1>
                </div>
                <div className="p-4 bg-gray-300  h-42 w-52 mt-12  mx-12 ml-60">
                    <div>
                        <a className=" flex text-6xl text-gray-450 justify-center"><i className="fa-regular fa-eye"></i>
                        </a>
                        <h1 className="font-bold text-xl mt-6  text-gray-950 text-center" id="windDirection">{windDirection}°</h1>
                    </div>
                    <h1 className="ml-8 my-2 text-xl font-bold text-gray-950 text-center">Wind Direction</h1>
                </div>

            </div>
        </div>
  </>;
}

export default WeatherInfo;
