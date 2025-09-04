import React from "react";
const Search=(props)=>{
    return(
        <div className="search">
            <div>
                <img src="./search.svg"/>
                <input type="text" placeholder="Search through movies" value={props.search} onChange={(e)=>props.setSearch(e.target.value)}/>
            </div>
        </div>
    )
}
export default Search