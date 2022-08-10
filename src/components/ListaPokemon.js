import styles from './ListaPokemon.module.css'

function ListaPokemon() {
    return(
        <div className={styles.content}>
            <h3 className={styles.title}> Pokemons </h3>
            <ul className={styles.list}>
                <li className={styles.namePokemon}> Bulbasour </li>
                <li className={styles.namePokemon}> Ivysour</li>
                <li className={styles.namePokemon}> Bulbasour </li>
                <li className={styles.namePokemon}> Ivysour</li>
                <li className={styles.namePokemon}> Bulbasour </li>
                <li className={styles.namePokemon}> Ivysour</li>
                <li className={styles.namePokemon}> Bulbasour </li>
                <li className={styles.namePokemon}> Ivysour</li>
                <li className={styles.namePokemon}> Bulbasour </li>
                <li className={styles.namePokemon}> Ivysour</li>
            </ul>
            <div className={styles.buttons}>
            <button className={styles.button}> Voltar </button>
            <button className={styles.button}> Avançar </button>
            </div>
        </div>
    )
}

export default ListaPokemon
