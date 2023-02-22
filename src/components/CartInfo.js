import React from "react";

const styles = {
    CartInfo: {
        backgroundColor: '#fff',
        position: 'absolute',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: '50px',
        top: '105px',
    },
    ul: {
        margin: '0px',
        padding: '0px',
    },
    productInCart: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 25px',
        borderBottom: 'solid 1px black'
    }
}

const CartInfo = (props) => {
    const { cart } = props
    return(
        <div style = { styles.CartInfo }>
            <ul style = { styles.ul } >
                {cart.map(x =>  
                <li style = { styles.productInCart } key = { x.name }>
                     <img alt = { x.name } src = { x.img } width = '50px' height = '32px'/>
                     {x.name} 
                     <span> {x.quantity} </span>
                </li>)}
            </ul>
        </div>
    )
}

export default CartInfo