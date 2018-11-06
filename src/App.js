import React from 'react';
import CartHeader from './components/CartHeader.js';
import CartItems from './components/CartItems.js';
import CartFooter from './components/CartFooter.js';
import AddItem from './components/AddItem.js';
import CartTotal from './components/CartTotal';



  
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
              { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
              { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
              { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
              { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
              { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
              { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
              { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
              { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
              { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
              ],
      cartItemsList: [
              { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
              { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
              { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }

  addToCart = (item) => {
    //console.log(item)
    this.setState(prevState => ({
        cartItemsList: prevState.cartItemsList.concat(item)
        
      }
    ))
  }
  onSubmit = (e) => {
    e.preventDefault()

    let selectedProducts = this.state.products.filter( product => {
      //console.log('product', product)
      return this.state.selction == product.id
    })

    //console.log('selected', selectedProducts)

    let newItem = { 
      id: this.state.cartItemsList.length +1, 
      product: { 
        id: selectedProducts[0].id, 
        name: selectedProducts[0].name, 
        priceInCents: selectedProducts[0].priceInCents}, 
      quantity: parseInt(this.state.quantity) }

    this.addToCart(newItem)
}

  onChange = (e) => this.setState({[e.target.name]: e.target.value})
  
  total = (cartItemsList) => {
    var totalnum = 0
    for(var i = 0; i < this.state.cartItemsList.length; i++){
      totalnum += this.state.cartItemsList[i].quantity * this.state.cartItemsList[i].product.priceInCents
    }
    return totalnum
  }

  render() {

    return (
      <div>
        <CartHeader />
        <CartItems cartItemList = {this.state.cartItemsList} />
        <CartTotal total = {this.total}/>
        <AddItem onChange={this.onChange} onSubmit={this.onSubmit } productsList={this.state.products} />
        <CartFooter copyright = "2016" />
      </div>
    )
  }
}


export default App
