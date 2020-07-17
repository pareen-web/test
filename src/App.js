import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './components/navbar'
import Productlist from './components/productlist'
import Product from './components/product'
import Details from './components/details'
import Cart from './components/cart'
import Default from './components/Default'
import Mobiledetails from './components/mobiledetails'
import Laptopdetails from './components/laptopdetails'
import Tvdetails from './components/tvdetails'


class App extends Component {
  render(){
      return(
        <React.Fragment>
          <Navbar></Navbar>
          <Switch>
            <Route exact path ="/" component ={Productlist} />
            <Route path = "/details" component = {Details} />
            <Route path = "/cart" component = {Cart} />
            <Route path = "/Mobiledetails" component = {Mobiledetails} />
            <Route path = "/LaptopDetails" component = {Laptopdetails} />
            <Route path = "/TvDetails" component = {Tvdetails}/>
            <Route component = {Default} />
          </Switch>
       </React.Fragment>
      )
  }

    
}

export default App;
