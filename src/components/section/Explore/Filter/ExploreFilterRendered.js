import React from 'react'
import '../../../../scss/base/explore/_exploreFilter.scss'; // SCSS styles
import FilterSelect from './FilterSelect';
import { v1 as uuidv1 } from 'uuid';

const dummyData = [
        ["All","Woman","Trans"],
        ["All","18-29 years", "30-39 years", "40+ years" ],
        ["All","Copenhagen", "Jylland", "Sjælland", "Fyn", "Lolland", "Falster","Bornholm"],
        ["All", "Outcall", "Incall"]
    ]
const dummyDataName = ["Gender", "Age", "Area", "Service"];

function handleSearch () {
    return null;
}

function handleChange () {
    return null;
}

const ExploreFilter = () => {

return (
    dummyData.map((item,index) => 
        <div key={uuidv1()}>
            <FilterSelect values={dummyData[index]} names={dummyDataName[index]}/>
        </div>   
    ))}

const ExploreFilterRendered = () => {

    return ( 
        <div className="filter-explore-wrap">
            <h2 className="filter-explore-header">Partners Near You</h2>
                <ExploreFilter />
                <div className="filter-input-search">
                    <input onChange={handleChange} placeholder="Name.. gender.."></input>
                    <button onClick={handleSearch}>Search</button>
                </div>
        </div>
    )
}

export default ExploreFilterRendered;
