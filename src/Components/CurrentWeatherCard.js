import React, { } from 'react';

const CurrentWeatherCard = ({ city, country }) => {


    return (
        <div className='px-10 text-xl'>
            <h1 className='text-3xl mt-4 mb-8'>{city}, {country}</h1>
            <h3 className='text-xl'>Date</h3>
            <div className='flex justify-between my-3'>
                <p>Tempareture</p>
                <p>Icon</p>
            </div>
            <p>description</p>
            <div className='flex justify-between my-3'>
                <p>wind</p>
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