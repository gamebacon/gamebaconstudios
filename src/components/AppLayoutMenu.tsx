import {IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterLink} from "@ionic/react";
import React from "react";
import {FiHome, FiPlay} from 'react-icons/fi';


import UILogo from "./UICommon/UILogo";

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
        <IonMenu contentId='main' side='start' swipe-gesture={true} menuId='main-menu'>
            <IonList className='space-y-5'>
                <IonRouterLink routerLink='/'>
                    <UILogo/>
                </IonRouterLink>
                {pages.map((page, index) => {
                    return (
                        <IonMenuToggle key={index} autoHide={false} className='bg-gray-100 flex w-full'>
                            <IonRouterLink routerLink={page.url} className='w-full h-full p-5'>
                                <div className='flex space-x-5 items-center'>
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