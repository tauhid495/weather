import moment from 'moment';
import React from 'react';
import WindNav from '../Components/WindNav';



const HourlyWind = ({ hourForcast }) => {
    // console.log(hourForcast)
    
    return (
        <div className='flex my-3 items-center '>

            <div className='flex text-center'>
                {hourForcast.map(data => {
                    return (
                        <div className=" rounded text-white font-semibold ">
                            <div className=" ">
                                <div>{data.wind_kph}</div>
                                <div className=''>
                                    <WindNav
                                        nav={data.wind_dir}
                                    />
                                    <div className='border w-12'></div>
                                    <p className='w-8 block mx-auto text-center'>{moment.unix(data.time_epoch).format('h a')}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div >
    );
};

export default HourlyWind;