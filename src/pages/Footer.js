import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <footer class="items-center p-4 bg-base-200 bg-opacity-70 px-10">
                <div className='flex justify-between'>
                    <div class="flex items-center">
                        {/* logo */}
                        <p className='ml-2 hidden md:block'>Copyright © 2022 - All right reserved by Tauhid Taiyaar</p>
                    </div>
                    <div class="flex items-center">

                        <a className='mx-2' target='blank' href="https://www.linkedin.com/in/shahidul-islam-224049149/">
                            <FaLinkedin className='w-7 h-7' /></a>
                        <a className='mx-2' target='blank' href="https://github.com/tauhid495">
                            <FaGithubSquare className='w-7 h-7' /></a>
                        <a className='mx-2' target='blank' href="mailto:tauhid495@gmail.com">
                            <MdEmail className='w-8 h-8' /></a>
                    </div>
                </div>
                <p className='md:hidden text-center'>Copyright © 2022 - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;