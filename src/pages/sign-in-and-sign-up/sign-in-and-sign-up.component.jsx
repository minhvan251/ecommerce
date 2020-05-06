import React from 'react';
import './sign-in-and-sign-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
function SignInAndSignOutPage () {
    

        return (
            <div className="forms">
                <SignIn />
                <SignUp />

            </div>

        )

    
}
export default SignInAndSignOutPage

