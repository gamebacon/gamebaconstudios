import React from 'react';
import {IonApp, IonMenuButton, IonRouterOutlet, IonSplitPane, setupIonicReact} from '@ionic/react';
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

setupIonicReact();

const App = () => {
    return (
    <IonApp>
        <IonReactRouter>
            <IonSplitPane contentId='main'>
                <IonMenuButton/>
                <AppLayoutMenu/>
                <IonRouterOutlet id='main'>
                    <Route>
                        <HomePage/>
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
        <h1 className='text-amber-900 bg-green-500'>Test</h1>
    </IonApp>
  );
}

export default App;
