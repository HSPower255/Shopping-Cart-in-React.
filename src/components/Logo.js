import React from "react";

const styles = {
    logo: {
        right: '10px',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        position: 'relative'
    }
}

const Logo = () => {
    return(
        <img style = { styles.logo } alt = 'Logo' src = "/logo-cart-icons/plantLogo.jpg"/>
    )
}

export default Logo