import { useEffect, useState } from "react";

function useWeatherInfo(searchValue) {
  const [data, setData] = useState(null);
  const apiKey = "1b15bdba0438fc1f7bfb7622889687d0";

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (searchValue.trim() === "") {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "Invalid City Name",
          text: "Please enter a valid city name!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });

        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod !== 200) {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Invalid City Name",
            text: "Please enter a valid city name!",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          return;
        }

        setData(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch weather data. Please try again.",
        });
      }
    };

    fetchWeatherData();
  }, [searchValue]);

  return data;
}

export default useWeatherInfo;


