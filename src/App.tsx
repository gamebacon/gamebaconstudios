import React from 'react';
import {IonApp, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

/* Main CSS File */
import './theme/variables.css';

import HomePage from './pages/HomePage';
import AppLayoutMenu from "./components/AppLayoutMenu";

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
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
        <h1 className='text-amber-900 bg-green-500'>Test</h1>
    </IonApp>
  );
}

export default App;
