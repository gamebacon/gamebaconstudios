import React from 'react';
import {GoLocation} from 'react-icons/go';


const MenuYouAreHere: React.FC = () => {
    return <div className='text-xs text-red-500 flex items-center justify-center uppercase font-roboto'>
        <div className='px-1'>You Are Here</div>
        <GoLocation/>
    </div>
}

export default MenuYouAreHere;