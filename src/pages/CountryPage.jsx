import Preloader from '../components/Preloader'

import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useContext} from 'react'
import { AppContext } from '../context'

import "./CountryPage.style.scss"

function CountryPage(){
    const {countryName} = useParams()
    const navigate = useNavigate();

    const {
        country,
        setCountry,
        setNeighboringCountries,
        neighboringCountries,
        resetNeighboringCountries
    } = useContext(AppContext)

    function getBorder(arr){
        arr.forEach(name =>{
            fetch(`https://restcountries.com/v2/alpha/${name}`)
            .then(res => res.json())
            .then(res => setNeighboringCountries(res.name))
        })
    }

    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(res => res.json())
        .then(res => {setCountry(res); getBorder(res[0].borders);})

        return () => {
            setCountry([]);
            resetNeighboringCountries();
        }
    },[countryName])

    return(
        <>
            {country.length === 0 ? (<Preloader/>)
            :
            (<div className='country'>
                <nav>
                    <button onClick={() => navigate(-1)}>Back</button>
                </nav>
                <div className="info">
                    <img src={country[0].flag} alt="flag" />
                    <div className="text-info">
                        <h3>{country[0].name}</h3>
                        <div className='text-grid'>
                        <span><b>Native name:</b> {country[0].nativeName}</span>
                        <span><b>Capital:</b> {country[0].capital}</span>
                        <span><b>Population:</b> {country[0].population}</span>
                        <span><b>Region:</b> {country[0].region}</span>
                        <span><b>Subregion:</b> {country[0].subregion}</span>
                        <span><b>Currency:</b> {country[0].currencies.map((item)=>item.name)}</span>
                        <span><b>Languages:</b> {country[0].languages.map((item)=>item.name)}</span>
                        <span><b>Top Level Domain:</b> {country[0].topLevelDomain.map((item)=>item)}</span>
                        </div>
                        <div className='border'>
                            <span><b>Border Countries:</b></span>
                        {neighboringCountries.map((item, idx) =>{
                            return idx < 3? <button onClick={()=>navigate(`/${item}`)} key={idx}>{item}</button>: null
                        }     
                        )}
                    </div>
                    </div>
                </div>
            </div>)
            }
        </>
    )
}

export default CountryPage