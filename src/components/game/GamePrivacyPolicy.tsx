import React from 'react';
import {useParams} from 'react-router-dom';
import games from '../../util/games';




const GamePrivacyPolicy: React.FC = () => {
    const {id} = useParams<any>();
    const game = games[id];
    console.log('Id: ' + id)
    return <div>
        {game && <div className='flex flex-col'>
            <div>{game.title}</div>
            <span>{game.privacyPolicy}</span>
        </div>}
    </div>
}

export default GamePrivacyPolicy