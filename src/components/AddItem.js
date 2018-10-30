import React from 'react';

class AddItem extends React.Component{
    state = {}

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddCartItem(this.state)
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
            <div className="container">
                <form onSubmit= { this.onSubmit }>
                    Quantity:
                    <div>
                        <input onChange = { this.onChange } className="qtyInput" name="quantity" type="number" min="0" max="100" placeholder="0"></input>
                    </div>
                    Products:
                    <div className="input-group mb-3">
                        <select onChange = { this.onChange } className="custom-select" id="inputGroupSelect02" name="selction">
                            <option defaultValue>Choose...</option>{this.props.productsList.map((product) => <option key={product.id} value={product.id}>Item: {product.name} \\ Price: {product.priceInCents}&#162;</option>)}
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-lg" name="submit">Submit</button>
                    </div>
                </form>
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