import React, {FC} from 'react';

import logo from '../../assets/images/logo.svg';

type UILogoProps = {
    style?: string;
}

const UILogo: FC<UILogoProps> = ({style}) => {
    return (
        <img src={logo} className={`h-28' ${style}`}/>
    );
};

export default UILogo
