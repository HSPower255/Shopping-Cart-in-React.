import React from "react"
import BubbleAlert from './BubbleAlert'
import CartInfo from './CartInfo'

const styles = {
    cart: {
        backgroundColor: 'inherit',
        border: 'none',
        cursor: 'pointer',
        width: '70px',
        margin: '0px 0px',
        padding: '0px'    
    },
    bubble: {
        position: 'relative',
        left: '20px',
        bottom: '5px'
    }
}

const Cart = (props) => {
    const { cart, isCartOpen, openCart } = props
    const quantity = cart.reduce((acc, el) => acc + el.quantity, 0)
    return(
        <div>
            <span style={styles.bubble}>
                {quantity !== 0 ? <BubbleAlert value = { quantity }/> : null}
            </span>

            <button onClick = { openCart } style = { styles.cart }> 
                   <img style = { styles.cart } alt = { 'Shopping Cart' } src = "/logo-cart-icons/cart.jpg"/>
            </button>

            {isCartOpen ? <CartInfo cart = { cart }/> : null }
        </div>
    )
}

export default Cart