import React, { Component } from 'react';
//import logo from './logo.svg';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import MyInfo from './MyInfo';
import Contact from './Contact';
//import TodoItem from './TodoItem';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <MyInfo/>
          <Contact/>
          <Footer/>
      </div>
    );
  }
}

export default App;
