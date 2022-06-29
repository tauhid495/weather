
import React, { PureComponent } from 'react';
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, Line, ComposedChart, Legend, } from 'recharts';

const HourlyPresure = ({ hourForcast }) => {
    const data = hourForcast;
    console.log(data);
    return (
        <div className='text-xs'>
            <ComposedChart width={1100} height={120} data={data}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="heatindex_c" fill="#8884d8" stroke="#8884d8" />
                {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
                <Line type="monotone" dataKey="heatindex_c" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default HourlyPresure;