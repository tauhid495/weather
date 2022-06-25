import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from '../Components/CurrentWeatherCard';

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

            })
    }, [city]);

    return (
        <div className='px-3 md:px-20'>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow md:w-1/2 card bg-base-200 bg-opacity-70 rounded-box ">

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
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow md:w-1/2 card bg-base-300 bg-opacity-70 rounded-box place-items-center">
                    content
                </div>
            </div>
        </div>
    );
};

export default Home;