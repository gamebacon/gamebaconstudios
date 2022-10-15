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
    return  <IonRouterLink routerLink={href}>
        <div>
            <div className='flex m-5 shadow-2xl rounded-2xl'>
                <img src={img} className='w-40 md:w-72 rounded-l-2xl'/>
                <div className='rounded-r-2xl flex flex-col p-5'>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <span className=''>{description}</span>
                </div>
            </div>
        </div>
    </IonRouterLink>
}

export default GameCard;
