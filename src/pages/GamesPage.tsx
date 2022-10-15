import React from 'react';
import {IonPage} from '@ionic/react';
import {NormalizeName} from '../util/NormalizeName';
import GameCard from '../components/UICommon/GameCard';

import fallBallIcon from  '../assets/images/games/fallball/showcase.png';
import videoPokerIcon from '../assets/images/games/videopoker/showcase.png';
import solitaireIcon from '../assets/images/games/solitaire/showcase.png';

const games = [
    {
        'image': fallBallIcon,
        'title': 'Fall Ball',
        'description': 'Fall ball is a simple, easy and satisfying game.',
        'genre': 'Casual'
    },
    {
        'image': solitaireIcon,
        'title': 'Solitaire',
        'description': 'Solitaire is a relaxing puzzle game.',
        'genre': 'Puzzle'
    },
    {
        'image': videoPokerIcon,
        'title': 'Videopoker',
        'description': 'Videopoker is a relaxing and fun card game.',
        'genre': 'Puzzle'
    }
];

const GamesPage: React.FC = () => {
    return (
        <IonPage className=''>
            <div className='flex flex-col h-full overflow-y-auto'>
                {games?.map((game, idx) => (
                    <GameCard
                        key={idx}
                        img={game.image}
                        title={game.title}
                        description={game.description}
                        href={'/games/' + NormalizeName(game.title)}
                    />
                ))}
            </div>
        </IonPage>
    )
};

export default GamesPage
