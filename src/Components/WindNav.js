import React, { useEffect, useState } from 'react';
import n from '../asset/nav/n.png'
import nne from '../asset/nav/nne.png'
import ne from '../asset/nav/ne.png'
import ene from '../asset/nav/ene.png'
import e from '../asset/nav/e.png'
import ese from '../asset/nav/ese.png'
import se from '../asset/nav/se.png'
import sse from '../asset/nav/sse.png'
import s from '../asset/nav/s.png'
import ssw from '../asset/nav/ssw.png'
import sw from '../asset/nav/sw.png'
import wsw from '../asset/nav/wsw.png'
import w from '../asset/nav/w.png'
import wnw from '../asset/nav/wnw.png'
import nw from '../asset/nav/nw.png'
import nnw from '../asset/nav/nnw.png'


const WindNav = ({ nav }) => {
    // console.log(nav);

    const [navIcon, setNavIcon] = useState(null);

    useEffect(() => {
        if (nav === 'N') {
            setNavIcon(n);
        }
        if (nav === 'NNE') {
            setNavIcon(nne);
        }
        if (nav === 'NE') {
            setNavIcon(ne);
        }
        if (nav === 'ENE') {
            setNavIcon(ene);
        }
        if (nav === 'E') {
            setNavIcon(e);
        }
        if (nav === 'ESE') {
            setNavIcon(ese);
        }
        if (nav === 'SE') {
            setNavIcon(se);
        }
        if (nav === 'SSE') {
            setNavIcon(sse);
        }
        if (nav === 'S') {
            setNavIcon(s);
        }
        if (nav === 'SSW') {
            setNavIcon(ssw);
        }
        if (nav === 'SW') {
            setNavIcon(sw);
        }
        if (nav === 'WSW') {
            setNavIcon(wsw);
        }
        if (nav === 'W') {
            setNavIcon(w);
        }
        if (nav === 'WNW') {
            setNavIcon(wnw);
        }
        if (nav === 'NW') {
            setNavIcon(nw);
        }
        if (nav === 'NNW') {
            setNavIcon(nnw);
        }
    }, [])


    return (
        <div>
            <div className='text-center my-2'>
                <img className='w-5 h-5 block mx-auto my-2' src={navIcon} alt="" />
            </div>
        </div>
    );
};

export default WindNav;