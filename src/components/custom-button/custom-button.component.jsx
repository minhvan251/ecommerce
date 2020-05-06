import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted,...otherProps}) => (

    <button className={`${inverted? 'inverted' : ''} ${isGoogleSignIn ?'google-sign-in':''} custom-button`} {...otherProps}>
        <span className='button-text'>{children}</span>
        
    </button>

)

export default CustomButton