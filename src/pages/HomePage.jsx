import {useEffect, useContext} from 'react'
import { AppContext } from '../context'
import CountryCard from '../components/CountryCard'

import "./HomePage_style.scss"
import Preloader from '../components/Preloader'

function HomePage(){

    const {
        setCountries,
        setRegion, 
        handleCountry, 
        setHandleCountry, 
        setFilteredCountries,
        filteredCountries,
        region
    } = useContext(AppContext)

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then(res=> res.json())
        .then(res => {
            setCountries(res)
            setFilteredCountries(res)
        })
    },[region])

    return(
        <>
        <div className='find-area'>
            <input 
                type="text" 
                placeholder='Search for a country...' 
                value={handleCountry} 
                onChange={setHandleCountry}
            />

            <select id="regions" onChange={setRegion}>
                <option value="none">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
        <div className='container'>
            {filteredCountries.length? 
            filteredCountries.map((country, idx) => <CountryCard key={idx} country={country} />):
            <Preloader/>}
        </div>
        </>
    )
}

export default HomePage