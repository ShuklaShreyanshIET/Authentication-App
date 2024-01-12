import React from 'react'
import { v1 as uuidv1 } from 'uuid';


const FilterSelect = (props) => {
    console.log(props.values)

    const array = props.values

    const options = array.map((item,i) => {
        return (
        <option key={uuidv1()} name={array[i]}>{array[i]}</option>
        );
    
    })

    return (
        <div className="slcbox">
            <label name={`${props.names}`}>{props.names}</label>
            <select className={`${props.names}`} >
                {options}
            </select>
        </div>
    )

}



export default FilterSelect
