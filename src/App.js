import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/layout/Header";
import PokemonList from "./components/pages/PokemonList";
import DetailedView from "./components/pages/DetailedView";
import TypeList from "./components/pages/TypeList";
// import './App.css';

class App extends React.Component {


  render() {
    return (
        <Router>
          <div className="App">
            <Header/>
            <Route path={"/pokemons"} component={PokemonList}/>
            <Route path={"/types"} component={TypeList}/>
          </div>
        </Router>
    )
  }
}

export default App;