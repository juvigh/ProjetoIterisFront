import "./App.css";
import DetalhesPokemon from "./components/DetalhesPokemon";
import ListaPokemon from "./components/ListaPokemon";
import PokedexTitle from "./components/PokedexTitle";

function App() {
  return (
    <div className="App">
      <PokedexTitle></PokedexTitle>
      <ListaPokemon></ListaPokemon>
      <DetalhesPokemon></DetalhesPokemon>
    </div>
  );
}

export default App;
