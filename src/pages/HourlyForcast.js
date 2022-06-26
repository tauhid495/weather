import React from 'react';
import { BsWind } from 'react-icons/bs';

import { WiHumidity } from 'react-icons/wi';

const HourlyForcast = ({ hourForcast }) => {

    console.log(hourForcast);

    return (
        <div className='mb-3'>
            {/* Hourly forcast page {hourForcast.length} */}

            <div className='flex'>
                {hourForcast.map(data => {
                    return (
                        <div class="mx-2 rounded-2xl bg-base-200 bg-opacity-70 shadow-xl">
                            <div class="p-3 ">
                                <p>{data.time}</p>

                                <img className='block mx-auto h-20 w-20' src={data.condition.icon} alt="" />
                                <p className='text-2xl text-center font-semibold'>{data.temp_c} °C</p>

                                <p className='text-center'>Real feel : {data.feelslike_c} °C</p>

                                <div className='flex justify-between my-1 w-32'>
                                    <div className='flex items-center'>
                                        <WiHumidity className='w-6 h-6' />
                                        <p className='text-sm'>{data.humidity} %</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <BsWind className='w-6 h-6' />
                                        <p className='text-sm'>  {data.wind_kph} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default HourlyForcast;