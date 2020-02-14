import React, { Component } from 'react';
import Product from './components/Product'
import ShoppingCard from './components/ShoppingCard'
import NavBar from './components/NavBar'

import productsData from './Info/productsData'
/* import logo from './logo.svg';*/
import './App.css'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsData : productsData,
      allProduct: []
    }
  }

  render() {
    const cards = this.state.productsData.map((product,idx) =>
    <Product info={product} key={idx}/>
    );

    this.state.allProduct = [productsData[0], productsData[4], productsData[1]]

    return (
      <div className='container' id="content">
        <div className="row">
          <div col s12>
            <NavBar/>
          </div>
          <div className="col s7">
            {cards}    
          </div>
          <div className="col s5">
            <ShoppingCard items={this.state.allProduct} />
          </div>
        </div>
      </div>
    );
  }
}
 

export default App;
