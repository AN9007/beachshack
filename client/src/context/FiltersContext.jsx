import { createContext, useContext, useState } from "react"

const FiltersContext = createContext()

export const FiltersProvider = ({children}) => {
    const [filters, setFilters] = useState({
        category:[],
        minPrice: 0,
        maxPrice: 100,
        search:'',
        productType:[]
    })
    
    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
        
        )
}


export const useFilters = () => useContext(FiltersContext)