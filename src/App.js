import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/pages/PokemonList";
import DetailedView from "./components/pages/DetailedView";
import TypeList from "./components/pages/TypeList";


class App extends React.Component {


  render() {
    return (
        <Router>
          <>
            <Navbar title = 'Pokemon App'/>
            <Route path={"/pokemons"} component={PokemonList}/>
            <Route path={"/types"} component={TypeList}/>
          </>
        </Router>
    )
  }
}

export default App;