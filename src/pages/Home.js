import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from '../Components/CurrentWeatherCard';
import DailyForcast from './DailyForcast';
import HourlyForcast from './HourlyForcast';
import HourlyWind from './HourlyWind';
import Compass from '../asset/compass.png';
import { BsThermometerSun } from 'react-icons/bs';
import HourlyPresure from './HeatIndex';


const Home = ({ cityName, country, date, temp, img, text, feels, humidity, wind, cloud, uv, visibility, dayForcast, hourForcast }) => {




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