import React from 'react';
import { WiHumidity } from 'react-icons/wi';
import { BsThermometerHigh, BsThermometerLow } from 'react-icons/bs';

const DailyForcast = ({ dayForcast }) => {
    console.log(dayForcast);

    return (
        <div className='w-[650px]'>
            <div className=' grid grid-cols-3 gap-x-10'>
                {dayForcast.map(data => {
                    return (
                        <div class=" w-52 rounded-2xl bg-base-200 bg-opacity-70 shadow-xl">
                            <div class="p-3 text-">
                                <p className='text-center'>{data.date}</p>
                                <img className='block mx-auto w-20 h-20' src={data.day.condition.icon} alt="" />
                                <p className='text-center'>Posibility of rain : {data.day.daily_chance_of_rain} %</p>
                                <div className='flex justify-between'>
                                    <h2 class="text-center font-semibold text-2xl my-2">{data.day.avgtemp_c} °C</h2>
                                    <div className='flex items-center'>
                                        <WiHumidity className='w-6 h-6' />
                                        <p className='text-sm'>{data.day.avghumidity} %</p>
                                    </div>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <BsThermometerHigh className='w-5 h-5' />
                                        <p>{data.day.maxtemp_c} °C</p>
                                    </div>
                                    <div className='flex'>
                                        <BsThermometerLow className='w-5 h-5' />
                                        <p>{data.day.mintemp_c} °C</p>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <p> Wind : {data.day.maxwind_kph}km/h</p>
                                    <p>UV : {data.day.uv}</p>
                                </div>
                                <p className='text-center'>Sunrise : {data.astro.sunrise}</p>
                                <p className='text-center'>Sunset :  {data.astro.sunset}</p>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default DailyForcast;