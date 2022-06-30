export function reducer(state, {type, payload}){
    console.log(payload)
    switch(type){
        case 'RESET_NEIGHBORING':{
            return{
                ...state,
                neighboringCountries: payload
            }
        }
        case 'SET_NEIGHBORING':{
            return{
                ...state,
                neighboringCountries: [...state.neighboringCountries, payload]
            }
        }
        case 'SET_COUNTRY':{
            return{
                ...state,
                country: payload
            }
        }
        case 'SET_FILTERED':{
            return{
                ...state,
                filteredCountries: payload
            }
        }
        case 'HANDLE_COUNTRY':{
            return{
                ...state,
                handleCountry: payload.target.value,
                filteredCountries: state.countries.filter(country => country.name.common.toLowerCase().includes(payload.target.value.toLowerCase()))
            }
        }
        case 'SET_REGION':{
            return{
                ...state,
                region: payload.target.value === 'none'? state.region : payload.target.value 
            }
        }
        case 'SET_COUNTRIES':{
            return{
                ...state,
                countries: payload
            }
        }
        default: return state;
    }
}