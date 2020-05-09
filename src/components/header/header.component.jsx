import React from 'react';
import { Link } from 'react-router-dom'
import { createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'
import './header.styles.scss'
import {ReactComponent as Logo } from '../../asset/original.svg'

import{ auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import {HeaderContainer, LogoContainer, OptionContainer, OptionDiv, OptionLink} from './header.styles'
const Header = ({currentUser,hidden}) => (
<HeaderContainer>
    <LogoContainer to='/'>
        <Logo className='logo' />

    </LogoContainer>
    <OptionContainer>
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>
        <OptionLink to='/shop'>
            CONTACT
        </OptionLink>
        {   
            
            currentUser ?
            <OptionDiv onClick={() => {auth.signOut();console.log('signout')}}>
                SIGN OUT
            </OptionDiv>
            :
            <OptionLink to='/signin'>
                SIGN IN 
            </OptionLink>
        }
        <CartIcon />


    </OptionContainer>
    {
        hidden?
        null:
        <CartDropDown />
    }
    

</HeaderContainer>

)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden :selectCartHidden
})
export default connect(mapStateToProps)(Header);