import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from '../Components/CurrentWeatherCard';

const Home = ({ findCity }) => {
    const API_KEY = `e6f0080b536e470e884124723222306`;
    const [city, setCity] = useState(null);
    const [cityName, setCityName] = useState(null);
    const [country, setCountry] = useState(null);


    useEffect(() => {
        setCity(findCity);
    }, [findCity]);

    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(function (position) {
        //     setLatitude(position.coords.latitude);
        //     setLongitude(position.coords.longitude);
        // // })
        // console.log(latitude, longitude);
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
            .then((weatherData) => {
                console.log(weatherData.data);
                setCityName(weatherData.data.location.name)
                setCountry(weatherData.data.location.country)
            })
    }, [city]);

    return (
        <div className='px-20'>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow md:w-1/2 card bg-base-300 rounded-box ">

                    <CurrentWeatherCard
                        cityName={cityName}
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