import React from "react";

const styles = {
    title: {
        textAlign: 'center',
        fontSize: '50px', 
        fontWeight: '400',
        letterSpacing: '10px',
        textTransform: 'uppercase',
        alignItems: 'center',
        backgroundColor: '#eae2b7',
        margin: '0px 0px',
        padding: '40px'
    }
}

const Title = () => {
    return(
        <h1 style = { styles.title }> Garden Shop </h1>
    )
}

export default Title