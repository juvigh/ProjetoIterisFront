import styles from './ListaPokemon.module.css'

function ListaPokemon() {
    const pokebola = 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png' 
    return(
        <div className={styles.content}>
            <h3 className={styles.title}> Pokemons </h3>
            <ul className={styles.list}>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Bulbasour </li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Ivysour</li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Bulbasour </li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Ivysour</li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Bulbasour </li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Ivysour</li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Bulbasour </li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Ivysour</li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Bulbasour </li>
                <li className={styles.namePokemon}> <img alt='pokebola' src={pokebola}/> Ivysour</li>
            </ul>
            <div className={styles.buttons}>
            <button className={styles.button}> Voltar </button>
            <button className={styles.button}> Avançar </button>
            </div>
        </div>
    )
}

export default ListaPokemon
