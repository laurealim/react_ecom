import React from 'react';
import {Switch,Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Ecom/Navbar';
import ProductList from './Ecom/ProductList';
import Details from './Ecom/Details';
import Cart from './Ecom/Cart/Cart';
import Default from './Ecom/Default';
import Modal from './Ecom/Modal';

// import MyComp from './MyComponent/MyComp';
// import Counter from './Counter/Counter';

class App extends React.Component {
  state = {
    persons: [
      { name: "Laureal", age: 30 },
      { name: "Akib", age: 25 },
      { name: "Islam", age: 28 },
      { name: "Nazrul", age: 33 },
      { name: "Hakim", age: 26 },
    ]
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>

        <Modal />

      </React.Fragment>
      // <div className="App">
      //   {this.state.persons.map((person, index) => {
      //     return <MyComp key={index} name={person.name} age={person.age} />
      //   })
      //   }

      //   <Counter />
      // </div>
    );
  }
}

export default App;
