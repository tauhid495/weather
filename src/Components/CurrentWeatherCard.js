import React, { } from 'react';

const CurrentWeatherCard = ({ cityName, country, date, temp, img, text }) => {


    return (
        <div className='px-10 text-xl'>
            <h1 className='text-3xl mt-4 '>{cityName}, {country}</h1>
            <h3 className='text-xl'>Date & time : {date}</h3>
            <div className='flex justify-between'>
                {/* degree sign= alt + 0176 */}
                <div className='text-5xl my-4'>{temp} °C</div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={img} alt="weather condition pic" />
                    <p className='text-base'>{text}</p>
                </div>
            </div>
            <div className='flex justify-between my-3'>
                <p>Tempareture</p>
                <p>Humidity</p>
            </div>
            <div className='flex justify-between my-4'>
                <p>Sunrise</p>
                <p>Sunset</p>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;