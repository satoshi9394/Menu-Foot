import React from 'react';
import Product from './components/Product'
import ShoppingCard from './components/ShoppingCard'

import productsData from './Info/productsData'
/* import logo from './logo.svg';
import './App.css'; */

const App=() =>{

  const cards = productsData.map((product,idx) =>
    <Product info={product} key={idx}/>
  );


  const allProduct = [productsData[0]]

  


  
  return (
    <div className='container'>
      <div className="row">
        <div className="col s8">
          <div className="row">
            <div className="col s6">{cards}</div>
            <div className="col s6">{cards}</div>
          </div>          
        </div>
        <div className="col s4">
          <ShoppingCard items={allProduct} />
        </div>
      </div>
    </div>
  );
}

export default App;
