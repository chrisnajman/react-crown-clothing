import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import './header.component.styles.scss'
import { auth } from '../../firebase/firebase.utils'

const Header = ({currentUser})=> {
    return(
        <>
        <h1>V1</h1>
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" title="Link to Home page" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div 
                        className="option"
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/sign-in">
                        SIGN IN
                    </Link>
                }
            
            </div>
        </div>
        </>
    )
}

export default Header