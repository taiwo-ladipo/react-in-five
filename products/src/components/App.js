import React, { Component } from 'react';

import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import ProductItem from './ProductItem';

import products from './../data/sampleProducts'

class App extends Component {
  render() {
      const items = products.map(product => <ProductItem key={product.id} product={product}/>);
    return (
      <div>
          <Header/>
          {items}
          <Footer/>
      </div>
    );
  }
}

export default App;
