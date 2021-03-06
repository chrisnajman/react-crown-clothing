import React, {Component} from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth,signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: ''
            })

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        id="emailSignIn"
                        type="email" 
                        name="email"
                        label="email"
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                    />
                    
                    <FormInput 
                        id="passwordSignIn"
                        type="password" 
                        name="password"
                        label="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required 
                    />

                    <div className="buttons">
                        <CustomButton 
                            type="submit" 
                            value="Submit Form"
                        >
                            Sign in
                        </CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                            value="Submit Form"
                        >
                            Sign in with Google
                        </CustomButton>                    
                    </div>


                </form>
            </div>
        )
    }
}

export default SignIn