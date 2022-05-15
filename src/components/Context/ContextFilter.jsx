import React, { createContext, useReducer } from 'react'
import allProducts from '../../Data'

const initialFilterState = {
    filteredItems: [...allProducts],
    filtered: "all",
    searchKey: ""
}

const filterReduce = (state, action) => {
    switch (action.type) {
        case "SEARCH_KEYWORD":
            state.searchKey = action.payload

            return {
                ...state
            }
        case "ALL":
            state.filtered = 'all'
            if (state.filtered === 'all') {
                state.filteredItems = [...allProducts]
            }
            return {
                ...state
            }
        case "VEGETABLE":
            state.filtered = 'veget'
            if (state.filtered === 'veget') {
                state.filteredItems = allProducts.filter(product => product.category === 'سبزیجات')
            }
            return {
                ...state
            }
        case "FRUIT":
            state.filtered = 'fruit'
            if (state.filtered === 'fruit') {
                state.filteredItems = allProducts.filter(product => product.category === 'میوه جات')
            }
            return {
                ...state
            }
        case "NUTS":
            state.filtered = 'nuts'
            if (state.filtered === 'nuts') {
                state.filteredItems = allProducts.filter(product => product.category === 'خشکبار')
            }
            return {
                ...state
            }
        case "BEANS":
            state.filtered = 'beans'
            if (state.filtered === 'beans') {
                state.filteredItems = allProducts.filter(product => product.category === 'حبوبات')
            }
            return {
                ...state
            }
        default:
            return state
    }
}

export const FilterContext = createContext()

export default function ContextFilter({ children }) {
    const [state, dispath] = useReducer(filterReduce, initialFilterState)
    return (
        <FilterContext.Provider value={{ state, dispath }}>
            {children}
        </FilterContext.Provider>
    )
}
