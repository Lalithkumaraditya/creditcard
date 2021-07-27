import React from 'react';
import classes from './Select.module.css'
const Select = (props) => {
    
    return (
        <div>
            <label>{props.label}</label>
            <select name="cars" id="cars" className={classes.select} onChange={props.onChange}>
               {props.options && props.options.map((option,indx)=>(
                <option value={option} key={indx}>{option}</option>
               )) }
            </select>
        </div>
    );
};

export default Select;