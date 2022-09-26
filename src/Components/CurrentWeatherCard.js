import moment from 'moment';
import React, { } from 'react';

const CurrentWeatherCard = ({ cityName, country, date, temp, img, text, feels, humidity, wind, cloud, uv, visibility }) => {


    return (
        <div className='text-lg pr-10'>
            <h1 className='text-2xl mt-4 '>{cityName}, {country}</h1>
            <h3 className='text-base'>{moment.unix(date).format('Do MMM YY, h:mm a')}</h3>
            <div className='flex items-center justify-between'>
                {/* degree sign= alt + 0176 */}
                <div className='flex flex-col'>
                    <div className='text-5xl md:text-6xl font-semibold my-4'>{temp} °C</div>

                </div>

                <div className='flex flex-col justify-center items-center'>
                    <img className='w-24 h-24' src={img} alt="weather condition pic" />
                    <p className='text-sm'>{text}</p>
                </div>
            </div>
            <div className='text-base flex justify-between'>
                <p >Feels like : {feels} °C</p>
                <p>Cloud covered : {cloud} %</p>
            </div>
            <div className='flex justify-between my-3'>
                <p className='text-base'>Humidity : {humidity} %</p>
                <p className='text-base'>Wind : {wind} km/h</p>
            </div>
            <div className='flex justify-between my-4 text-base'>
                <p>UV index: {uv}</p>
                <p>Visibility : {visibility} km</p>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;