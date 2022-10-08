import {IonButton, IonContent, IonMenu, IonMenuButton, IonPage, IonPopover} from "@ionic/react";
import React from "react";

const HomePage: React.FC = () => {
    return (
    <IonPage>
        <h1 className='bg-red-600 text-yellow-400'>If this is yellow it mean tailwind is working!</h1>
        <IonButton id='popover-button'>Pop me!</IonButton>
        <IonPopover trigger='popover-button' className='bg-blue-300'>
            <IonContent className='text-6xl font-extrabold text-center text-fuchsia-800'>Hello world!</IonContent>
        </IonPopover>
    </IonPage>)
};

export default HomePage;