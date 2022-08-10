import styles from "./DetalhesPokemon.module.css";
function DetalhesPokemon() {
  const foto =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
  return (
    <div className={styles.content}>
      <img className={styles.img} alt="bulbasaur" src={foto}></img>
      <h3 className={styles.namePokemon}> bulbasaur </h3>
      <div className={styles.types}>
        <span className={styles.typePokemon}> Planta </span>
        <span className={styles.typePokemon}> Fogo </span>
      </div>

      <div className={styles.stats}>
        <h5> hp </h5>
        <span className={styles.barrinha}> nivel hp </span>
      </div>

      <div className={styles.stats}>
        <h5> attack </h5>
        <span className={styles.barrinha}> nivel attack </span>
      </div>

      <div className={styles.stats}>
        <h5> defense </h5>
        <span className={styles.barrinha}> nivel defense </span>
      </div>

      <div className={styles.stats}>
        <h5> speed </h5>
        <span className={styles.barrinha}> nivel speed </span>
      </div>
    </div>
  );
}

export default DetalhesPokemon;
