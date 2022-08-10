import './App.css';
import DetalhesPokemon from './components/DetalhesPokemon';
import ListaPokemon from './components/ListaPokemon';

function App() {
  return (
    <div className="App">
      <ListaPokemon></ListaPokemon>
      <DetalhesPokemon></DetalhesPokemon>
    </div>
  );
}

export default App;
