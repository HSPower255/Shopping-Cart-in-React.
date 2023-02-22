import React from 'react'

const styles = {
    button: {
    display: 'block',
    backgroundColor: '#90be6d',
    padding: '6px 50px',
    margin: 'auto',
    border: 'solid 2.5px',
    borderRadius: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    }
}

const Button = (props) => {
    return(
        <button style = { styles.button } { ...props }/>
    )
}

export default Button