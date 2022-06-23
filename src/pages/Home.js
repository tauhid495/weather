import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from '../Components/CurrentWeatherCard';
import axios from 'axios';

const Home = () => {
    const url = `http://api.openweathermap.org/geo/1.0/reverse`;
    const API_KEY = `84ec0b0676bd623d894ba70cbb7767e9`;
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [tempareture, setTempareture] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);



    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
        axios.get(`${url}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
            .then((weatherData) => {
                console.log(weatherData.data[0]);
                setTempareture(weatherData.data[0].name);
                setCity(weatherData.data[0].name)
                setCountry(weatherData.data[0].country)
            })
    }, [latitude, longitude])

    return (
        <div className='px-20'>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow md:w-1/2 card bg-base-300 rounded-box ">

                    <CurrentWeatherCard
                        city={city}
                        country={country}
                    />
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow md:w-1/2 card bg-base-300 rounded-box place-items-center">
                    content
                </div>
            </div>
        </div>
    );
};

export default Home;