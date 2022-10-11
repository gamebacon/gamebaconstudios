import {IonButton, IonContent, IonMenu, IonMenuButton, IonPage, IonPopover} from '@ionic/react';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <div className='h-full w-full md:p-20'>
                    <div className='md:bg-gradient-to-tr from-red-500 to-orange-500 via-yellow-500
                     h-full w-full md:rounded-xl px-4 md:px-16 xl:px-36 pt-8 flex flex-col
                      shadow-2xl overflow-y-auto'>
                        <h1 className='text-center text-4xl md:text-3xl lg:text-6xl font-bold pb-10 md:pb-20'>
                            Hi there 👋</h1>
                        <div className='bg-gradient-to-tr from-red-500 to-orange-500 via-yellow-500
                         md:bg-none p-5 rounded-lg'>
                            <h2 className='text-2xl xl:text-4xl font-semibold pb-5 md:p-0'>
                                WTF is Gamebacon Studios?</h2>
                            {/* eslint-disable-next-line max-len */}
                            <h4 className='md:text-base xl:text-xl'>Gamebacon studios is an indie game studio based in Sweden. yep thats about it, heres some dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero dui, aliquam eu lectus quis, suscipit posuere enims at. Suspendisse nulit amet dui. Nullam risus magna, commodo non nulla id, pulvinar pharetra nulla. Suspendisse luctus diam eget aliquet fermentum. Ut porta, libero quis volutpat lacinia, dolor turpis faucibus dui, malesuada laoreet dolor mi ac metus. Maecenas sed est at justo fermentum lobortis. Cras ut eros a dolor placerat faucibus vel sit amet leo. </h4>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>)
};


export default HomePage;