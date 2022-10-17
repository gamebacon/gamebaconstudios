import {IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterLink} from '@ionic/react';
import React, {useState} from 'react';
import {FiHome, FiPlay} from 'react-icons/fi';

import UILogo from './UICommon/UILogo';
import MenuYouAreHere from './menu/MenuYouAreHere';

interface AppLayoutMenuPage {
    title: string,
    url: string,
    icon: any,
}

const pages: AppLayoutMenuPage[] = [
    {
        title: 'Home',
        url: '/',
        icon: <FiHome/>,
    },
    {
        title: 'Games',
        url: '/games',
        icon: <FiPlay/>,
    }
];


const AppLayoutMenu: React.FC = () => {
    const [selected, setSelected] = useState('/');

    return (
        <IonMenu contentId='main' side='end' swipe-gesture={true} menuId='main-menu'>
            <IonList className='space-y-5 h-full bg-gradient-to-l from-white to-gray-100
             items-center flex flex-col px-10 pt-10'>
                <IonMenuToggle autoHide={false}>
                    <IonRouterLink routerLink='/'>
                        <UILogo style='w-full'/>
                    </IonRouterLink>
                </IonMenuToggle>
                {pages.map((page, index) => {
                    return (
                        <div key={index} className='w-full'>
                            {selected === page.url && <MenuYouAreHere/>}
                            <IonMenuToggle
                                key={index}
                                autoHide={false}
                                onClick={() => setSelected(page.url)}
                                className='shadow-menu-item flex w-full rounded-lg'>
                                <IonRouterLink
                                    routerLink={page.url}
                                    /* eslint-disable-next-line max-len */
                                    className='w-full h-full p-5 text-black text-black-navy'>
                                    <div className='flex space-x-5 items-center text-2xl justify-between font-semibold'>
                                        <label className=''>{page.title}</label>
                                        <div className='w-fit'>{page.icon}</div>
                                    </div>
                                </IonRouterLink>
                            </IonMenuToggle>
                        </div>
                    );
                })}
            </IonList>
        </IonMenu>
    );
}

export default AppLayoutMenu;