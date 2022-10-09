import {IonButton, IonContent, IonMenu, IonMenuButton, IonPage, IonPopover} from '@ionic/react';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <IonContent className='p-20'>
                <div className='h-full w-full p-20'>
                    <div className='bg-gradient-to-tr from-red-500 to-orange-500 via-yellow-500
                     h-full w-full rounded-xl px-36 py-20 flex flex-col shadow-2xl'>
                        <h1 className='text-6xl font-bold pb-20'>Hi there 👋</h1>
                        <div className=''>
                            <h2 className='text-4xl font-semibold pb-5'>WTF is Gamebacon Studios?</h2>
                            {/* eslint-disable-next-line max-len */}
                            <h4 className='text-xl'>Gamebacon studios is an indie game studio based in Sweden. yep thats about it, heres some dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero dui, aliquam eu lectus quis, suscipit posuere enims at. Suspendisse nulit amet dui. Nullam risus magna, commodo non nulla id, pulvinar pharetra nulla. Suspendisse luctus diam eget aliquet fermentum. Ut porta, libero quis volutpat lacinia, dolor turpis faucibus dui, malesuada laoreet dolor mi ac metus. Maecenas sed est at justo fermentum lobortis. Cras ut eros a dolor placerat faucibus vel sit amet leo. </h4>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>)
};


export default HomePage;