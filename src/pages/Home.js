import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from '../Components/CurrentWeatherCard';
import DailyForcast from './DailyForcast';
import HourlyForcast from './HourlyForcast';

const Home = ({ findCity }) => {
    const API_KEY = `e6f0080b536e470e884124723222306`;
    const [city, setCity] = useState(null);
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

    // console.log(setCity);



    useEffect(() => {

        if (findCity !== null) {
            // setCity(findCity);
            axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${findCity}&days=7&aqi=no&alerts=no`)
                .then((weatherData) => {
                    // console.log(weatherData.data);
                    setCityName(weatherData.data.location.name)
                    setCountry(weatherData.data.location.country)
                    setDate(weatherData.data.location.localtime)
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

        else {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            })
            // console.log(latitude);
            axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`)
                .then(weatherData => {
                    setCityName(weatherData.data.location.name)
                    setCountry(weatherData.data.location.country)
                    setDate(weatherData.data.location.localtime)
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
        };


    }, [latitude, findCity]);


    return (
        <div className='px-3 md:px-20 md:my-7'>
            <div className="flex flex-col lg:flex-row">
                <div className="grid flex-grow md:w-1/2 card bg-base-200 bg-opacity-70 rounded-box ">

                    <CurrentWeatherCard
                        cityName={cityName}
                        country={country}
                        date={date}
                        temp={temp}
                        img={img}
                        text={text}
                        feels={feels}
                        humidity={humidity}
                        wind={wind}
                        cloud={cloud}
                        uv={uv}
                        visibility={visibility}
                    />
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <p className='md:hidden font-semibold text-center mb-3 text-2xl'>Daily Forcast</p>


                <div className="md:w-1/2 overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide hover:scrollbar-default">

                    <DailyForcast dayForcast={dayForcast} />
                </div>
            </div>

            <p className='drop-shadow-md` shadow-black mt-5 font-semibold text-center mb-3 text-2xl'>Hourly Forcast</p>
            <div className='md:mb-10 overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide hover:scrollbar-default'>

                <HourlyForcast

                    hourForcast={hourForcast}
                />
            </div>
        </div >
    );
};

export default Home;