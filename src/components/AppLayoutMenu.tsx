import {IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterLink} from '@ionic/react';
import React from 'react';
import {FiHome, FiPlay} from 'react-icons/fi';


import UILogo from './UICommon/UILogo';

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
    return (
        <IonMenu contentId='main' side='end' swipe-gesture={true} menuId='main-menu'>
            <IonList className='space-y-5 h-full bg-gradient-to-r from-white to-gray-100
             items-center flex flex-col px-10 pt-10'>
                <IonRouterLink routerLink='/'>
                    <UILogo style='w-full'/>
                </IonRouterLink>
                {pages.map((page, index) => {
                    return (
                        <IonMenuToggle key={index} autoHide={false}
                            className='shadow-menu-item flex w-full rounded-lg'>
                            <IonRouterLink routerLink={page.url} className='w-full h-full p-5 text-black'>
                                <div className='flex space-x-5 items-center text-2xl justify-between font-semibold'>
                                    <label className=''>{page.title}</label>
                                    <div className='w-fit'>{page.icon}</div>
                                </div>
                            </IonRouterLink>
                        </IonMenuToggle>
                    );
                })}
            </IonList>
        </IonMenu>
    );
}

export default AppLayoutMenu;