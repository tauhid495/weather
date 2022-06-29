import React, { } from 'react';
import s from '../asset/nav/s.png';


const Nav = ({ data }) => {

    let windDir = [];

    if (data.wind_dir === 'S') {
        windDir(s)
    } else {
        windDir(s)
    }

    console.log(data.wind_dir);
    return (
        <div>
            <img src={windDir} alt="" />
        </div>
    );
};

export default Nav;