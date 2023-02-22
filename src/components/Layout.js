import React from 'react'

const styles = {
    layout: {
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',    
        flexDirection: 'column',     
        marginTop: '150px'
    },
    container: {
        width: '1200px',
    }
}

const Layout = (props) => {
    return(
        <div style = { styles.layout }>
            <div style = { styles.container }>
                {props.children}
            </div>
        </div>
    )
}

export default Layout