import {IonList, IonMenu, IonRouterLink} from "@ionic/react";
import React from "react";

import UILogo from "./UICommon/UILogo";

const AppLayoutMenu: React.FC = () => {
    return (
        <IonMenu>
            <IonList>
                <IonRouterLink routerLink='/'>
                    <UILogo/>
                </IonRouterLink>
            </IonList>
        </IonMenu>
    );
}

export default AppLayoutMenu;