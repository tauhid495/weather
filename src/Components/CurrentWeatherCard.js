import React, { } from 'react';

const CurrentWeatherCard = ({ cityName, country, date, temp, img, text, feels, humidity, wind, cloud, uv, visibility }) => {


    return (
        <div className='px-4 md:px-10 text-lg'>
            <h1 className='text-2xl mt-4 '>{cityName}, {country}</h1>
            <h3 className='text-lg'>Date & time : {date}</h3>
            <div className='flex items-center justify-between'>
                {/* degree sign= alt + 0176 */}
                <div className='flex flex-col'>
                    <div className='text-4xl my-4'>{temp} °C</div>
                    <div className='text-base'>Feels like : {feels} °C</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={img} alt="weather condition pic" />
                    <p className='text-base'>{text}</p>
                </div>
            </div>
            <div className='flex justify-between my-3'>
                <p className='text-base'>Humidity : {humidity} %</p>
                <p className='text-base'>Wind : {wind} km/h</p>
            </div>
            <div className='flex justify-between my-4 text-base'>
                <p>Cloud : {cloud} %</p>|
                <p>UV index: {uv}</p>|
                <p>Visibility : {visibility} km</p>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;