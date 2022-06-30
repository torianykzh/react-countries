import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext()

const initialState = {
    countries: [],
    filteredCountries: [],
    country: [],
    region: 'europe',
    handleCountry: '',
    neighboringCountries: [],
}

export const ContextProvider = ({children}) =>{

    const [value, disptach] = useReducer(reducer, initialState)

    value.setCountries = (arr) =>{
        disptach({type: 'SET_COUNTRIES', payload: arr})
    }

    value.setFilteredCountries = (arr) =>{
        disptach({type: 'SET_FILTERED', payload: arr})
    }

    value.setRegion = (event) =>{
        disptach({type: 'SET_REGION', payload: event})
    }

    value.setHandleCountry = (event) =>{
        disptach({type: 'HANDLE_COUNTRY', payload: event})
    }

    value.setCountry = (arr) =>{
        disptach({type: 'SET_COUNTRY', payload: arr})
    }

    value.setNeighboringCountries = (name) =>{
        disptach({type: 'SET_NEIGHBORING', payload: name})
    }

    value.resetNeighboringCountries = () =>{
        disptach({type: 'RESET_NEIGHBORING', payload: []})
    }

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}