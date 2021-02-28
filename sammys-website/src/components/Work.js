import { useState } from "react"

function Filters(props){
    const [filters, setFilters] = useState(
        [
             {
                 class: "filter selected",
                 text: props.selected
             },
             {
                 class: "filter ",
                 text: "Design"
             },
             {
                 class: "filter",
                 text: "Logo"
             },
             {
                 class: "filter ",
                 text: "Photo"
             },
             {
                 class: "filter",
                 text: "Type"
             },
             {
                 class: "filter",
                 text: "Video"
             },
             {
                 class: "filter",
                 text: "3D"
             },
             
         ]
    )
    const setFilter = (name) => {
        let filtersCopy = [...filters]
        const prevSelected = filters.find(x => x.class === "filter selected")
        const nextSelected = filters.find(x => x.text === name)
        const before = filtersCopy.indexOf(prevSelected)
        const after = filtersCopy.indexOf(nextSelected)
        
        filtersCopy[before].class = "filter"
        filtersCopy[after].class = "filter selected"
        props.setSelected(name)
        setFilters(filtersCopy) 
    }

    return(
        <div>

        <ul className="list-container">
            {filters.map((filter) => {
                return(
                    <li onClick={() => setFilter(filter.text)}>
                        <span className={filter.class} >{filter.text}</span>
                    </li>
                )
            })}           
        </ul>

        </div>
    )
}

function Work(){
    const [selected, setSelected] = useState('All')
    
    return(
                
    <div>
        <div className="portfolio-wrapper">
            <img data-src="img/work/ROJI-HANOlockup.png" alt=""/>
            <div className="label">
            <div className="label-text">
                <a className="text-title">Bird Document</a> 
                <span className="text-category">Logo</span>
            </div>
            <div className="label-bg"> </div>
            </div>
        </div>
        <div className="filters">
            <Filters selected={selected} setSelected={setSelected} />
        </div>
    </div>
  
    )
}

export default Work