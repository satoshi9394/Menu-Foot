import React, {Component} from 'react';
import Product from './components/Product'
import ShoppingCard from './components/ShoppingCard'

import productsData from './Info/productsData'
/* import logo from './logo.svg';*/
import './App.css'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsData : productsData
    }
  }

  render() {
    const cards = this.state.productsData.map((product,idx) =>
    <Product info={product} key={idx}/>
    );

    const allProduct = [productsData[0], productsData[2]]

    return (
      <div className='container' id="content">
        <div className="row">
          <div className="col s8">
            {cards}          
          </div>
          <div className="col s4">
            <ShoppingCard items={allProduct} />
          </div>
        </div>
      </div>
    );
  }
}
 

export default App;
