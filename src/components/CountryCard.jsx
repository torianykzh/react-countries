import {Link} from 'react-router-dom'

import '../components/CountryCard_style.scss'


function CountryCard({country}){
    const {flags, name, population, capital, region} = country
    return(
        <>
            <div className="card">
                <img src={flags.png} alt="flag"/>
                <Link to={name.common}>
                    <h3>{name.common}</h3>
                    <span><b>Population:</b> {population}</span>
                    <span><b>Region:</b> {region}</span>
                    <span><b>Capital:</b> {capital}</span>
                </Link>
            </div>
        </>
    )
}

export default CountryCard