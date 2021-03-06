import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle,auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
        }
    }
    handleSubmit = async (event) =>{
        event.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(this.state.email,this.state.password);
            
            
        } catch(error) {
            alert(error.message);
        }

        this.setState({email: '',password: ''})
    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({ [name]: value })
    }
    render() {

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}> 
                    <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label='email'
                    required />
                    
                    <FormInput 
                    name="password" 
                    type="password" 
                    label="password"
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    required />
                    
                    <div className='button'>

                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>

                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                        </CustomButton>
                    </div>
                    
               </form>

            </div>
        )
    }



}
export default SignIn