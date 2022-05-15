import React, { useContext } from 'react'
import './SearchBar.css'
import { FiSearch } from 'react-icons/fi'
import { FilterContext } from '../components/Context/ContextFilter'

export default function SearchBar() {
    const { dispath } = useContext(FilterContext)

    const searchKeywordHandler = (e) => {
        dispath({ type: "SEARCH_KEYWORD", payload: e.target.value })
    }
    return (
        <div className='searchBar_box'>
            <input
                onChange={(e) => searchKeywordHandler(e)}
                type="text" />
            <span>
                <FiSearch />
            </span>
        </div>
    )
}
