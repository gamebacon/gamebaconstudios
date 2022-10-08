import React from 'react';
import {IonApp, IonMenu, IonMenuButton, IonNav, IonRouterOutlet, IonSplitPane, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

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
import AppLayoutMenu from "./components/AppLayoutMenu";
import GamesPage from "./pages/GamesPage";

setupIonicReact();

const App = () => {
    return (
    <IonApp>
        <IonReactRouter>
            <IonSplitPane contentId='main'>
                <AppLayoutMenu/>
                <IonRouterOutlet id='main'>
                    <Route>
                        <HomePage/>
                    </Route>
                    <Route path='/games'>
                        <GamesPage/>
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
        <div className='bg-blue-600 h-16 aboslute'>
            <IonMenuButton/>
        </div>
    </IonApp>
  );
}

export default App;
