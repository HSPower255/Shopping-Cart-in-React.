import React from "react"

const styles = {
    bubbleAlert: {
        backgroundColor: '#606c38',
        color: 'white',
        border: 'solid black',
        borderRadius: '20px',
        padding: '5px 13px',
        fontSize: '1.3rem'
    }
}

const BubbleAlert = (props) => {
    const getNumber = (n) => {
        if(!n) {
            return ' '
        } 
        return n > 9 ? '9+' : n
    }

    const { value } = props

    return(
        <span style = { styles.bubbleAlert }> 
            {getNumber(value)}
        </span>
    )
}

export default BubbleAlert