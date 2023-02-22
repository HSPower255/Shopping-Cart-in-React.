import React from "react"
import Plant from './Plant'

const styles = {
    plants: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

const Plants = (props) => {
    const { plants, addToCart } = props 
    return(
        <div style = { styles.plants }>
                {plants.map(plant =>
                    <Plant
                    addToCart = { addToCart }
                    key = { plant.name }
                    plant = { plant }
                    />)}
            </div>
    )
}

export default Plants