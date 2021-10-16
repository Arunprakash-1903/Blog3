import { useState } from 'react'
export default function Search() {
    const [query,setQuery]=useState("")
    return (
        <div className="search__conantiner">
            <input className="search_input" placeholder="Search... "  value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
                 
        </div>
    )
}


