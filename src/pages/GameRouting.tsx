import React from 'react';
import {IonContent, IonPage, IonRouterOutlet} from '@ionic/react';
import {Route, Switch} from 'react-router-dom';
import GamePage from '../components/game/GamePage';
import GamePrivacyPolicy from '../components/game/GamePrivacyPolicy';
import AllGamesPage from './AllGamesPage';

const GameRouting: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonRouterOutlet>
                    <Switch>
                        <Route exact={true} path='/games'>
                            <AllGamesPage/>
                        </Route>
                        <Route exact={true} path='/games/:id'>
                            <GamePage/>
                        </Route>
                        <Route exact={true} path='/games/:id/privacy-policy/'>
                            <GamePrivacyPolicy/>
                        </Route>
                    </Switch>
                </IonRouterOutlet>
            </IonContent>
        </IonPage>
    )
};

export default GameRouting
