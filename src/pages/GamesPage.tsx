import React from 'react';
import {IonPage} from '@ionic/react';
import {NormalizeName} from '../util/NormalizeName';
import GameCard from '../components/UICommon/GameCard';
import games from '../util/games';

const GamesPage: React.FC = () => {
    return (
        <IonPage className=''>
            <div className='flex flex-col h-full overflow-y-auto bg-light-background'>
                { Object.values(games)?.map((game, idx) => (
                    <GameCard
                        key={idx}
                        img={game.image}
                        title={game.title}
                        description={game.description}
                        href={'/games/' + idx}
                    />
                )) }
            </div>
        </IonPage>
    )
};

export default GamesPage
