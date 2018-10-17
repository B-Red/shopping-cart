import React from 'react';

class AddItem extends React.Component{

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <p>Products:</p>
                <div className="input-group mb-3">
                    <select className="custom-select" id="inputGroupSelect02">
                        <option defaultValue>Choose...</option>
                        {this.props.productsList.map((product) => <option key={product.id} value={product.id}>Item: {product.name} \\ Price: {product.priceInCents}&#162;</option>)}
                        
                    </select>
                </div>
            </div>
        )
    }
}

export default AddItem

// {props.cartItemList.map(item => {
//     return (
//             <div className="list-group-item" key={item.id}>
//                 <div className="row">
//                     <div className="col-md-8">{item.product.name}</div>
//                     <div className="col-md-2">{item.product.priceInCents}</div>
//                     <div className="col-md-2">{item.quantity}</div>
//                 </div>
//             </div>
//         )
//     }
// )
// }