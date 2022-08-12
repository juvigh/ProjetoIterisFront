import styles from "./ListaPokemon.module.css";
import {useState, useEffect} from 'react'
// import { getAllPokemons } from "../pokeApi";

function ListaPokemon() {
  const pokebola =
    "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png";
  const [pokemons, setPokemons] = useState([]); 
  const previousNext = '?offset=0&limit=10'

  useEffect(() => {
     try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${previousNext}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
     } catch (error) {
       console.log('seu erro:', error)  
     }
  }, [])


  return (
    <div className={styles.content}>
      <h3 className={styles.title}> Pokemons </h3>
      <ul className={styles.list}>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id} className={styles.namePokemon}>
              <img alt="pokebola" src={pokebola} /> {pokemon.name}
            </li>
          );
        })}
      </ul>
      <div className={styles.buttons}>
        <button className={styles.button}> Voltar </button>
        <button className={styles.button}> Avançar </button>
      </div>
    </div>
  );
}

export default ListaPokemon;
