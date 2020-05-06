import React from 'react';
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component'
import { selectCartItemsCount} from '../../redux/cart/cart.selector'

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        {/* {console.log(cartItems)} */}
        <div className='cart-items' >
        {cartItems.map(
            item => (
                <CartItem key={item.id} item={item} />
            )
        )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectCartItemsCount(state)
});
export default connect(mapStateToProps)(CartDropDown);