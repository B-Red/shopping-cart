import React from 'react';

class AddItem extends React.Component{

    

    render() {
        return (
            <div className="container">
                <form onSubmit= { this.props.onSubmit }>
                    Quantity:
                    <div>
                        <input onChange = { this.props.onChange } className="qtyInput" name="quantity" type="number" min="0" max="100" placeholder="0"></input>
                    </div>
                    Products:
                    <div className="input-group mb-3">
                        <select onChange = { this.props.onChange } className="custom-select" id="inputGroupSelect02" name="selction">
                            <option defaultValue>Choose...</option>{this.props.productsList.map((product) => <option key={product.id} value={product.id}>Item: {product.name} \\ Price: ${(product.priceInCents / 100).toFixed(2)}</option>)}
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
