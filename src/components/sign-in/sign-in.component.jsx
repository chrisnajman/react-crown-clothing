import React, {Component} from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
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
                        type="email" 
                        name="email"
                        label="email"
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                    />
                    
                    <FormInput 
                        type="password" 
                        name="password"
                        label="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required 
                    />

                    <CustomButton 
                        type="submit" 
                        value="Submit Form"
                    >
                        Sign in
                    </CustomButton>
                    <CustomButton 
                        onClick={signInWithGoogle}
                        value="Submit Form"
                    >
                        Sign in with Google
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn