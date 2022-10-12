import axios from 'axios'
import { useState, useEffect } from 'react';



function Questao05() {

    const [populationCount, setPopulationCount] = useState(0)
    const [mostPopulatedCountryName, setMostPopulatedCountryName] = useState('')
    const [lessPopulatedCountryName, setLessPopulatedCountryName] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('americas')



    function getCountries() {
        const lista = axios.get(`https://restcountries.com/v2/region/${selectedCountry}?fields=name,population`).then(
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
        countryList.map(country => {
            if (mostPopulated < country.population) {
                mostPopulated = country.population
                mostPopulatedCountry = country.name
                setMostPopulatedCountryName(mostPopulatedCountry)
                setPopulationCount(mostPopulated)
            }
        })
    }

    async function calculateLessPopulatedCountry() {
        const countryList = await getCountries()
        let lessPopulated = countryList[0].population
        let lessPopulatedCountry = '';
        countryList.map(country => {
            if (lessPopulated > country.population) {
                lessPopulated = country.population
                lessPopulatedCountry = country.name
                setLessPopulatedCountryName(lessPopulatedCountry)
                setPopulationCount(lessPopulated)
            }
        })
    }
    useEffect(() => {
        if (selectedCountry === 'americas') {
            calculateMostPopulatedCountry();
        } else if (selectedCountry === 'asia') {
            calculateLessPopulatedCountry();
        }
    }, [selectedCountry])

    function renderPopulationText() {
        if (selectedCountry === 'americas' ) {
            return (
                <p> País Mais Populoso das Américas é : {mostPopulatedCountryName}</p>
            )
        }else if(selectedCountry === 'asia'){
            return(
                <p> País Menos Populoso da Asia é : {lessPopulatedCountryName}</p>
            )
        }
    }

    return (
        <div>
            {renderPopulationText()}
            <p> E sua população é de : {populationCount} </p>

            <button className='btn btn-primary m-2' onClick={
                () => {
                    setSelectedCountry('americas');
                }
            }>
                Americas
            </button>

            <button className='btn btn-primary m-2' 
            onClick={
                () => {
                    setSelectedCountry('asia')
                }
            }>
                Asia
            </button>

        </div>
    )
}
export default Questao05;