import React from 'react';
import {IonApp, IonMenuButton, IonRouterOutlet, IonSplitPane, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {Route, Switch} from 'react-router-dom';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Main CSS File */
import './theme/variables.css';

import HomePage from './pages/HomePage';
import AppLayoutMenu from './components/AppLayoutMenu';
import AllGamesPage from './pages/AllGamesPage';
import GamePage from './components/game/GamePage';
import ContactPage from './pages/ContactPage';
import GamePrivacyPolicy from './components/game/GamePrivacyPolicy';
import GameRouting from './pages/GameRouting';
import TeamPage from './pages/TeamPage';

setupIonicReact();

const App = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId='main'>
                    <AppLayoutMenu/>
                    <IonRouterOutlet id='main'>
                        <Switch>
                            <Route exact={true} path='/contact'>
                                <ContactPage/>
                            </Route>
                            <Route exact={true} path='/team'>
                                <TeamPage/>
                            </Route>
                            <Route exact={true} path='/'>
                                <HomePage/>
                            </Route>
                        </Switch>
                        <Route path="/games" component={GameRouting}/>
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>
            <IonMenuButton className='absolute right-4 top-8 ion-no-padding ion-no-margin text-6xl' mode='md'/>
        </IonApp>
    );
}

export default App;
