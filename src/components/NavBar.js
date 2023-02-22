import React from "react"
import Logo from './Logo'
import Cart from './Cart'

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#283618',
        height: '110px',
        padding: '0 20px',
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 2)',
    }
}

const NavBar = (props) => {
    const { cart, isCartOpen, openCart } = props
    return(
        <nav style = { styles.navbar }>
            <Logo/>
            <Cart 
            cart = { cart }
            isCartOpen = { isCartOpen }
            openCart = { openCart }/>
        </nav>
    )
}

export default NavBar