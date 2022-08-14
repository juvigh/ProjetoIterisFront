import styles from "./ListaPokemon.module.css";
import {useState, useEffect} from 'react'
// import { getAllPokemons } from "../pokeApi";

function ListaPokemon() {
  const pokebola =
    "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png";
  const [pokemons, setPokemons] = useState([]); 
  const [previousNext, setPreviousNext] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')

  const pegarPokemons = async () => {
    const res =  await fetch(previousNext)
    const data = await res.json()
    setPokemons(data.results)
    setPreviousNext(data.next)
  }

  const previous = async () => {
    const res = await fetch(previousNext)
    const data = await res.json()  
    setPokemons(data.results)
    setPreviousNext(data.previous)
  } 
 

  useEffect(() =>{
    pegarPokemons()
  }, [])



  return (
    <div className={styles.content}>
      <h3 className={styles.title}> Pokemons </h3>
      <ul className={styles.list}>
        {pokemons.map((pokemon, index) => {
          return (
            <li key={index} className={styles.namePokemon}>
              <img alt="pokebola" src={pokebola} /> {pokemon.name}
            </li>
          );})}
      </ul>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => previous()} > Voltar </button>
        <button className={styles.button} onClick={() => pegarPokemons()} > Avançar </button>
      </div>
    </div>
  );
}

export default ListaPokemon;
