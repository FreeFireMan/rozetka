import React, {Component} from 'react';
import Header from "./components/header";
import ProductList from "./components/ProductList";

class App extends Component {
    render() {
        return (
            <div>
              <Header/>
              <ProductList/>
            </div>
        );
    }
}

export default App;