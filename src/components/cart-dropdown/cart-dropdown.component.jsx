import React from 'react';
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import {withRouter} from 'react-router-dom'
import './cart-dropdown.styles.scss';
import toggleCartHidden from '../../redux/cart/cart.action'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems} from '../../redux/cart/cart.selector'

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        
        <div className='cart-items' >
        {cartItems.length
        ?(cartItems.map(
            item => (
                <CartItem key={item.id} item={item} />
            )
        ))
        :(<span className='empty-cart'>Your Cart is empty</span>)
        }
        
        </div>
        <CustomButton onClick={()=>{
        dispatch(toggleCartHidden());
        history.push('/checkout')
        }}>
        GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropDown));