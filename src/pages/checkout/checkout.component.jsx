import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {selectCartTotal} from '../../redux/cart/cart.selector'
import './checkout.styles.scss'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
const checkout = ({cartItems,cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quatity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove </span>
            </div>
        </div>
        {cartItems.map(
            cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            )
        )}
        <div className ='total'>TOTAL: ${cartTotal}</div>
        <StripeCheckoutButton price={cartTotal} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
})
export default connect(mapStateToProps)(checkout);