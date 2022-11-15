import React from 'react';
import games from '../../util/games';
import {useParams} from 'react-router-dom';
import {IonPage, IonBackButton, IonRouterLink} from '@ionic/react';


const GamePage: React.FC = () => {
    const {id} = useParams<any>();
    const game = games[id];
    console.log(`detail url: >${game.image}<`)
    return <IonPage>
        <IonBackButton defaultHref='/games' className='absolute p-5' mode='md'/>
        <div className='justify-center flex mt-20'>
            <div className='flex flex-col m-5 shadow-2xl rounded-2xl w-fit'>
                <img src={game.image} className='w-40 md:w-96 rounded-t-2xl'/>
                <div className='rounded-r-2xl flex flex-col p-5 pb-3'>
                    <div className=''>
                        <h2 className='font-semibold text-2xl'>{game.title}</h2>
                        <span className=''>{game.description}</span>
                    </div>
                    <div className='justify-between flex text-xs font-thin mt-10'>
                        <IonRouterLink>About</IonRouterLink>
                        <IonRouterLink routerLink={game.privacyPolicy}>Privacy policy</IonRouterLink>
                    </div>
                </div>
            </div>
        </div>
    </IonPage>
};

export default GamePage
