import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Favourites } from "./views/favourites/favourites";
import { Home } from "./views/home/home";
import { Pokemons } from "./views/pokemons/pokemons";
import {Individual} from "./views/pokemons/individual"
/* Routing is not complete, please add missing part of the router to make it work properly

Take a look at list of imported components!!!

HINT: Missing routes are
* /pokemons
* /favourites
* /

If you get stuck here refer to first pages of react-router documentation. I literally copied code from their tutorial

* Later you'll have to comeback here to add additional route for /pokemons/:id but you'll know it when you get there
*/

function App() {
  return (
    <main className="App h-screen bg-red-100">
      <div className="w-6/12 pt-4 mx-auto">
        
        <Router>
          <div>
            <nav>
              <ul className="flex poke-font justify-between">
                <li key="1-link" className="mr-4">
                  <Link to="/">Home</Link>
                </li>
                <li key="2-link" className="mr-4">
                  <Link to="/pokemons">Pokemons</Link>
                </li>
                <li key="3-link" className="mr-4">
                  <Link to="/favourites">Favourites</Link>
                </li>
              </ul>
            </nav>
            <Switch>
            <Route path="/pokemons/:index" component={Individual} />
              <Route path="/favourites">
                <Favourites />
              </Route>
              <Route path="/pokemons">
                <Pokemons />
              </Route>
              
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </main>
  );
}

export default App;
