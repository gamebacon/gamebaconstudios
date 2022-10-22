import React, {FC} from 'react';
import {IonButton, IonRouterLink} from '@ionic/react';

type GameCardProps = {
    img: string;
    title: string;
    description: string;
    href?: string;
}

const GameCard: FC<GameCardProps> = ({
    img,
    title,
    description,
    href
}) => {
    return  <IonRouterLink routerLink={href} onClick={() => {window.location.reload()}}>
        <div>
            <div className='flex m-5 shadow-game-item rounded-2xl bg-white border border-neutral-300 text-black-navy'>
                <img src={img} className='w-40 h-30 md:w-72 md:h-60 rounded-l-2xl'/>
                <div className='rounded-r-2xl flex flex-col p-5'>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <span className='text-gray-500'>{description}</span>
                </div>
            </div>
        </div>
    </IonRouterLink>
}

export default GameCard;
