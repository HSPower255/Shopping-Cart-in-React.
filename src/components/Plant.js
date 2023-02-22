import React from "react"
import Button from './Button'

const styles = {
    plant: {
        border: 'solid 5px #003049', 
        borderRadius: '20px',
        boxShadow: '0 5px 5px rgb(0,0,0,0.5)',
        margin: '20px',
        padding: '55px 5px',
        backgroundColor: '#d6ccc2'
    }, 
    img: {
        width: '100%',
        height: '65%',
    }, 
    h2: {
        fontFamily: 'Verdana',
        textAlign: 'center',
        color: '#023047',
        fontSize: '25px',
        
    },
    p: {
        textAlign: 'center',
        fontSize: '25px',
    }
}

const Plant = (props) => {
    const { plant, addToCart } = props 
    return(
        <div style = { styles.plant }>
            <img  style = { styles.img } alt = { plant.name } src = { plant.img }/>
            <h2 style = { styles.h2 }> { plant.name } </h2>
            <p style = { styles.p }> { plant.price } </p>
            <Button onClick = {() => addToCart(plant)}>
                    Add to Cart
            </Button>
        </div>
    )
}

export default Plant