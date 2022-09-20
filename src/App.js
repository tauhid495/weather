

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';


function App() {
  const API_KEY = `e6f0080b536e470e884124723222306`;
  const [cityName, setCityName] = useState(null);
  const [country, setCountry] = useState(null);
  const [date, setDate] = useState(null);
  const [temp, setTemp] = useState(null);
  const [img, setImg] = useState(null);
  const [text, setText] = useState(null);
  const [feels, setFeels] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [cloud, setCloud] = useState(null);
  const [uv, setUv] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [dayForcast, setDayForcast] = useState([]);
  const [hourForcast, setHourForcast] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [findCity, setFindCity] = useState('')

  navigator.geolocation.getCurrentPosition(function (position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  })
  useEffect(() => {

    if (findCity === '') {
      axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`)
        .then(weatherData => {
          // console.log(weatherData.data);
          setCityName(weatherData.data.location.name)
          setCountry(weatherData.data.location.country)
          setDate(weatherData.data.location.localtime_epoch)
          setTemp(weatherData.data.current.temp_c)
          setImg(weatherData.data.current.condition.icon)
          setText(weatherData.data.current.condition.text)
          setFeels(weatherData.data.current.feelslike_c)
          setHumidity(weatherData.data.current.humidity)
          setWind(weatherData.data.current.wind_kph)
          setCloud(weatherData.data.current.cloud)
          setUv(weatherData.data.current.uv)
          setVisibility(weatherData.data.current.vis_km)
          setDayForcast(weatherData.data.forecast.forecastday)
          setHourForcast(weatherData.data.forecast.forecastday[0].hour)

        })
    } else {

      axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${findCity}&days=7&aqi=no&alerts=no`)
        .then((weatherData) => {
          console.log(weatherData);
          setCityName(weatherData.data.location.name)
          setCountry(weatherData.data.location.country)
          setDate(weatherData.data.location.localtime_epoch)
          setTemp(weatherData.data.current.temp_c)
          setImg(weatherData.data.current.condition.icon)
          setText(weatherData.data.current.condition.text)
          setFeels(weatherData.data.current.feelslike_c)
          setHumidity(weatherData.data.current.humidity)
          setWind(weatherData.data.current.wind_kph)
          setCloud(weatherData.data.current.cloud)
          setUv(weatherData.data.current.uv)
          setVisibility(weatherData.data.current.vis_km)
          setDayForcast(weatherData.data.forecast.forecastday)
          setHourForcast(weatherData.data.forecast.forecastday[0].hour)
        })
    }
  }, [latitude, findCity])

  const handleSearch = (event) => {
    event.preventDefault();
    const find = event.target.name.value;
    if (find === null) {
      setFindCity('');
    } else {
      setFindCity(find)
    }
    event.target.reset()
  }


  return (

    <div className="bg-[url('/src/asset/20.jpg')] bg-cover scrollbar-hide text-white">
      <Navbar handleSearch={handleSearch}>
        <Routes>
          <Route path='/' element={<Home
            cityName={cityName} country={country} date={date} temp={temp} img={img}
            text={text} feels={feels} humidity={humidity} wind={wind} cloud={cloud} uv={uv} visibility={visibility} dayForcast={dayForcast}
            hourForcast={hourForcast}
            latitude={latitude} />} />
        </Routes>
        <Footer />
      </Navbar>
    </div>

  );
}

export default App;
