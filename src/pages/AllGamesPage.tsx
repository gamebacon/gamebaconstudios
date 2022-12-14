import React from 'react';
import {IonPage} from '@ionic/react';
import GameCard from '../components/game/GameCard';
import games from '../util/games';

const AllGamesPage: React.FC = () => {
    return (
        <IonPage>
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

export default AllGamesPage
