import styles from "./ListaPokemon.module.css";
import {useState, useEffect} from 'react'
import DetalhesPokemon from "../PokeDetails/DetalhesPokemon";
// import Pikachu from "../Easteregg";

function ListaPokemon() {
  const pokebola =
    "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png";
 
  const [previousNext, setPreviousNext] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
  const [detailsPokemons, setDetailsPokemons] = useState(false) 
  const [pokemons, setPokemons] = useState([]); 

  function clickPokemon() {
    setDetailsPokemons(true)
  }

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
    <div className={styles.card}>
      <h3 className={styles.title}> Pokemons </h3>
      <ul className={styles.list}>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id} className={styles.namePokemon} onClick={clickPokemon}>
              <img alt="pokebola" src={pokebola} /> {pokemon.name}
            </li>
          );})}
      </ul>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => previous()} > Voltar </button>
        <button className={styles.button} onClick={() => pegarPokemons()} > Avançar </button>
      </div>
    </div>
    {detailsPokemons === true && (
          <DetalhesPokemon/>
        )}

        {detailsPokemons === false && (
          <></>
        )}
        {/* {detailsPokemons === true && pokemons.name === 'pikachu' (
          <Pikachu/>
        ) } */}
    </div>
  );
}

export default ListaPokemon;
