import styles from "./DetalhesPokemon.module.css";
import {useEffect, useState} from 'react'

function DetalhesPokemon() {
  const [dados, setDetails] = useState([])
  // const id = 'https://pokeapi.co/api/v2/pokemon/1/'

  useEffect(() => {
     fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response) => response.json())
    .then(data => { console.log(data)
      const dados = {
        id: data.id,
        nome: data.name,
        img_pokemon: data.sprites.other.dream_world.front_default,
        tipo: data.types[0].type.name,
        hp: data.stats[0].stat.name,
        attack: data.stats[1].stat.name,
        defense: data.stats[2].stat.name,
        speed: data.stats[5].stat.name,
        barrinha: data.stats[0].base_stat
      }
      console.log(dados)

    setDetails(dados)
    })
  },[])



  return (
    <div className={styles.content}>

      <img className={styles.img} alt="bulbasaur" src={dados.img_pokemon}></img>

      <h3 className={styles.namePokemon}> {dados.nome}</h3>

      <div className={styles.types}>
        {[{dados}].map((dado, index) => {
          console.log(dado)
          return ( 
          <>
            <span key={index} className={styles.typePokemon}> {dados.tipo} </span>
            </>
          );})}
        
      </div>

      <div className={styles.stats}>
        <h5> {dados.hp} </h5>
        <span className={styles.barrinha}> nivel hp </span>
      </div>

      <div className={styles.stats}>
        <h5> {dados.attack}</h5>
        <span className={styles.barrinha}> nivel attack </span>
      </div>

      <div className={styles.stats}>
        <h5> {dados.defense} </h5>
        <span className={styles.barrinha}> nivel defense </span>
      </div>

      <div className={styles.stats}>
        <h5> {dados.speed} </h5>
        <span className={styles.barrinha}> nivel speed </span>
      </div> 
      </div>
      )}
      
      export default DetalhesPokemon;
