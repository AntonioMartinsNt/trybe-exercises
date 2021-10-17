import pokemons from "./data";
import './App.css';
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
