import React from 'react'

const CartTotal = (props) => {
    return(
        <div className='container'>
            <p>Total:${(parseInt(props.total())/100).toFixed(2)}</p>
        </div>
        
    )
}

export default CartTotal