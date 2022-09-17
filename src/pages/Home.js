import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from '../Components/CurrentWeatherCard';
import DailyForcast from './DailyForcast';
import HourlyForcast from './HourlyForcast';
import HourlyWind from './HourlyWind';
import Compass from '../asset/compass.png';
import { BsThermometerSun } from 'react-icons/bs';
import HourlyPresure from './HeatIndex';


const Home = ({ findCity }) => {
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

    // console.log(setCity);



    useEffect(() => {

        if (findCity === null) {

            navigator.geolocation.getCurrentPosition(function (position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            })
            // console.log(latitude);
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
        }

        else {
            axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${findCity}&days=7&aqi=no&alerts=no`)
                .then((weatherData) => {
                    console.log(weatherData.data);
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
        };


    }, [latitude, findCity]);


    return (
        <div className='px-3 md:px-20 md:mt-7'>
            <div className="flex flex-col lg:flex-row">
                <div className="grid flex-grow md:w-1/2 card bg-base-200 bg-opacity-10 rounded-box ">

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

            <p className='drop-shadow-md md:hidden shadow-black mt-5 font-semibold text-center mb-3 text-2xl'>Hourly Forcast</p>

            <div className='md:my-10 overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide hover:scrollbar-default'>

                <HourlyForcast

                    hourForcast={hourForcast}
                />
            </div>

            <dir className='md:flex items-center'>
                <img className='md:hidden w-32 mr-2' src={Compass} alt="" />
                <div className='flex mr-2 md:w-1/2 items-center md:mt-7 mb-10 overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide hover:scrollbar-default'>
                    <div className='hidden md:block w-2/12'>
                        <img className='w-full mr-2' src={Compass} alt="" />
                    </div>
                    <div className='w-10/12'>
                        <HourlyWind
                            hourForcast={hourForcast}
                        />
                    </div>
                </div>


                <div className='w-1/12 md:hidden text-white'>
                    <BsThermometerSun className='w-14 h-14 text-yellow-500' />
                    <p className='text-center font-semibold'>Heat Index</p>
                </div>

                <div className='md:flex md:pl-5 md:w-1/2 items-center md:my-10 overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide hover:scrollbar-default'>
                    <div className='hidden md:block md:w-1/12 text-white'>
                        <BsThermometerSun className='w-14 h-14 text-yellow-500' />
                        <p className='text-center font-semibold'>Heat Index</p>
                    </div>
                    <div className='md:w-11/12'>
                        <HourlyPresure
                            hourForcast={hourForcast}
                        />
                    </div>
                </div>
            </dir>


        </div >
    );
};

export default Home;