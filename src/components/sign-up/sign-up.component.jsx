import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'
class SignUp extends React.Component {

    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password1: '',
            password2: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password1, password2} = this.state
        
        if(password1 !== password2) {
            alert('password doesn\'t match');
            return;
        }
        try { 
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password1
            );
            
            await createUserProfileDocument(user, {displayName: displayName})
            this.setState({
                displayName: '',
                email: '',
                password1: '',
                password2: ''
            })

        } catch(error) {
            console.log(error)
        }


    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({ [name]: value })
    }
    

    render(){
        return (
            <div>
                <h1>Create Your Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="displayName" 
                    type="text" 
                    label="name"
                    value={this.state.displayName}
                    handleChange={this.handleChange} 
                    required />


                    <FormInput
                    name="email" 
                    type="email" 
                    label="email"
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    required />

                    <FormInput
                    name="password1" 
                    type="password" 
                    label="password"
                    value={this.state.password1}
                    handleChange={this.handleChange} 
                    required />

                    <FormInput
                    name="password2" 
                    type="password" 
                    label="confirm password"
                    value={this.state.password2}
                    handleChange={this.handleChange} 
                    required />


                    <CustomButton type="submit">Register</CustomButton>
                    

                </form>
            </div>

        )
    }

}

export default SignUp