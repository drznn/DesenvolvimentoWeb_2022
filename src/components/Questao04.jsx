import axios from 'axios'
import { useState, useEffect } from 'react';



function Questao04() {

    const [populationCount, setPopulationCount] = useState(0)
    const [mostPopulatedCountryName, setMostPopulatedCountryName] = useState('')

    function getCountries() {
        const lista = axios.get("https://restcountries.com/v2/region/africa?fields=name,population").then(
            (response) => {
                return response.data
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        return lista
    }

     async function calculateMostPopulatedCountry() {
        const countryList = await getCountries()
        let mostPopulated = 0;
        let mostPopulatedCountry = "";
        console.log(countryList)
        countryList.map(country => {
            if (mostPopulated < country.population) {
                mostPopulated = country.population
                mostPopulatedCountry = country.name
                setMostPopulatedCountryName(mostPopulatedCountry)
                setPopulationCount(mostPopulated)
            }
        })
    }

    useEffect(() => {
        calculateMostPopulatedCountry();
    }, [])


    return (
        <div>
            <p> País Mais Populoso é : {mostPopulatedCountryName}</p>
            <p> E sua população é de : {populationCount} </p>
        </div>
    )
}
export default Questao04;