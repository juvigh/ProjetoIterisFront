const pokemons = async () => {
    // let urlPokemons = `https://pokeapi.co/api/v2/pokemon`

    fetch('https://pokeapi.co/api/v2/pokemon', {
        method: GET,
        headers: {"Content-type": "application/json"},
        body: JSON.stringify
    })
    .then(response => console.log (response));

    // try{
    //     //  const response = await fetch(urlPokemons)
    //     //  .then(response.json())
    // } catch(err) {
    //         console.log(err)
    //     }
   
}
