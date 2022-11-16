import React from 'react';

import {FiMail} from 'react-icons/fi';

const TeamPage: React.FC = () => {
    return <div className='flex flex-col items-center h-full'>
        <div className='my-auto justify-center md:w-1/2'>
            <div className='md:bg-amber-500 rounded-xl p-10 text-center'>
                <h1 className='text-3xl'>The team</h1>
            </div>
            <a href='mailto:gamebaconstudios.com'
                className='font-roboto mb-12 font-medium mt-10 items-center text-lg md:text-2xl flex
                w-fit shadow-menu-item rounded-4xl p-5 mx-auto'>
                <FiMail className='text-lg md:text-3xl mr-5'/>
                    gamebaconstudios@gmail.com
            </a>
        </div>
    </div>
};

export default TeamPage;