import React from 'react';
import CartHeader from './components/CartHeader.js';
import CartItems from './components/CartItems.js';
import CartFooter from './components/CartFooter.js';
import AddItem from './components/AddItem.js';
import CartItem from './components/CartItem.js';



  
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
      
    }
  }


  render() {
    const cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

    return (
      <div>
        <CartHeader />
        <CartItems cartItemList = {cartItemsList} />
        <AddItem productsList={this.state.products} />
        <CartFooter copyright = "2016" />
      </div>
    )
  }
}


export default App
