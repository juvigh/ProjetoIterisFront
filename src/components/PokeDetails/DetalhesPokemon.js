import styles from "./DetalhesPokemon.module.css";
import {useEffect, useState} from 'react'

function DetalhesPokemon() {
  const [dados, setDetails] = useState([])


  useEffect(() => {
    const fetchData = (id) => {fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then(pokemon => { setDetails(pokemon)
      const dados = {
        identifica: pokemon.id,
        nome: pokemon.name,
        img_pokemon: pokemon.sprites.other.dream_world.front_default,
        tipo: pokemon.types[0].type.name,
        hp: pokemon.stats[0].stat.name,
        attack: pokemon.stats[1].stat.name,
        defense: pokemon.stats[2].stat.name,
        speed: pokemon.stats[5].stat.name,
        barrinha_hp: pokemon.stats[0].base_stat,
        barrinha_attack: pokemon.stats[1].base_stat,
        barrinha_defense: pokemon.stats[2].base_stat,
        barrinha_speed: pokemon.stats[5].base_stat
      }
      console.log(dados)

    setDetails(dados)
    })}
    fetchData(1)
  }, [])

  console.log(dados.name)

  return (
    <div className={styles.content}>

      <img className={styles.img} alt="bulbasaur" src={dados.img_pokemon}></img>

      <h3 className={styles.namePokemon}> {dados.nome}</h3>

      <div className={styles.types}>
        {[dados].map((dado) => {
          console.log(dado)
          return ( 
          <>
            <span key={dados.id} className={styles.typePokemon}> {dados.tipo} </span>
            </>
          );})}
        
      </div>

      <div className={styles.stats}>
        <h5> {dados.hp} </h5>
        <span className={styles.barrinha}> {dados.barrinha_hp} </span>
      </div>

      <div className={styles.stats}>
        <h5> {dados.attack}</h5>
        <span className={styles.barrinha}> {dados.barrinha_attack} </span>
      </div>

      <div className={styles.stats}>
        <h5> {dados.defense} </h5>
      <span className={styles.barrinha}> {dados.barrinha_defense} </span>
      </div>

      <div className={styles.stats}>
        <h5> {dados.speed} </h5>
        <span className={styles.barrinha}> {dados.barrinha_speed} </span>
      </div> 
      </div>
      )}
      
      export default DetalhesPokemon;
