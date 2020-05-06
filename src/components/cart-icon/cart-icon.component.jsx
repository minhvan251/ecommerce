import React from 'react';

import {connect} from 'react-redux'
import ToggleCartHidden from '../../redux/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../asset/cart-icon.svg'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick ={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> 0</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(ToggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);