import React, {FC} from 'react';

// @ts-ignore
import logo from '../../assets/images/logo.jpg';

type UILogoProps = {
    style?: string;
}

const UILogo: FC<UILogoProps> = ({style}) => {
    return (
        <img src={logo} className={`h-28' ${style}`}/>
    );
};

export default UILogo
