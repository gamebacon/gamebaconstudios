import { IonPage } from "@ionic/react";
import React from "react";

const HomePage: React.FC = () => {
    return (
    <IonPage>
        <h1 className='bg-red-600 text-yellow-400'>If this is yellow it mean tailwind is working!</h1>
    </IonPage>)
};

export default HomePage;