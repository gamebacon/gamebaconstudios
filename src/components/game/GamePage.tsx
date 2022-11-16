import React from 'react';
import {useParams} from 'react-router-dom';
import {IonPage, IonBackButton, IonRouterLink, IonIcon} from '@ionic/react';
import games from '../../util/games';
import {AiOutlineArrowRight} from 'react-icons/ai';


const GamePage: React.FC = () => {
    const {id} = useParams<any>();
    const game = games[id];
    return <IonPage>
        <IonBackButton defaultHref='/games' className='absolute p-5' mode='md'/>
        <div className='justify-center flex mt-20'>
            <div className='flex flex-col m-5 shadow-2xl rounded-2xl w-fit'>
                <img src={game.image} className='w-40 md:w-96 rounded-t-2xl'/>
                <div className='rounded-r-2xl flex flex-col p-5 pb-3'>
                    <div className='mb-20'>
                        <h2 className='font-semibold text-2xl'>{game.title}</h2>
                        <span className=''>{game.description}</span>
                    </div>
                    <IonRouterLink class='pr-5 hover:underline'
                        routerLink={`/games/${id}/privacy-policy/`}>
                        Privacy policy
                    </IonRouterLink>
                </div>
            </div>
        </div>
    </IonPage>
};

export default GamePage
