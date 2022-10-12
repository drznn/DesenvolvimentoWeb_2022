import axios from 'axios'
import { useState } from 'react';


function Questao03() {

    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0);

    function getPokemons() {
        setOffset(prevState => prevState + 10)
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`).then(
            (response) => {
                setPokemons(response.data.results)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <div>
            {
                pokemons.map(
                    pokemon => {
                        return (
                            <ul>
                                <li>{pokemon.name}</li>
                            </ul>
                        )
                    }
                )
            }
            <button onClick={
                (event) => {
                    getPokemons()
                }
            }>
                Get Pokemons
            </button>


        </div>
    )
}

export default Questao03;