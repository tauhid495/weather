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

            <div className='md:flex items-center'>
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
            </div>
            {/* <div>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700  focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button class="btn inline-block px-6 py-2.5 bg-white text-gray-500 font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    );
};

export default Home;