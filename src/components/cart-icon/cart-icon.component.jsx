import React from 'react';

import {connect} from 'react-redux'
import ToggleCartHidden from '../../redux/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../asset/cart-icon.svg'

import './cart-icon.styles.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick ={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(ToggleCartHidden())
})
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);