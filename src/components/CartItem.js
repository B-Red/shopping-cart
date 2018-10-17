import React from 'react';

const CartItem = (props) => {
    return (
        <div className="collection-item">
        {props.cartItemList.map(item => {
                return (
                        <div className="list-group-item" key={item.id}>
                            <div className="row">
                                <div className="col-md-8">{item.product.name}</div>
                                <div className="col-md-2">{item.product.priceInCents}</div>
                                <div className="col-md-2">{item.quantity}</div>
                            </div>
                        </div>
                    )
                }
            )
        }
        </div>
    )
}



export default CartItem;