import React, {  } from 'react';
import classes from './Input.module.css'

const Input = (props) => {
   

    if (props.type === 'card') {
        return (
            <div>
                <label htmlFor="fname" ><span className={classes.label}>{props.label}</span></label><br></br>
                <input  id={props.id}  name={props.name} className={classes.fname} onChange={props.onChange} onBlur={props.onBlur} pattern="[0-9\s]{13,19}" maxLength="19"></input>
            </div>
        )
    }
    else if (props.type === 'name') {
        return (
            <div>
                <label htmlFor="fname" ><span className={classes.label}>{props.label}</span></label><br></br>
                <input  r type="text" id={props.id} name={props.name} className={classes.fname} maxLength="30" onChange={props.onChange}></input>
            </div>)
    }
    else if (props.type === 'cvv') {
        return (
            <div>
                <label htmlFor="fname" ><span className={classes.cvvLabel}>{props.label}</span></label><br></br>
                <input    type="text" id={props.id} name={props.name} className={classes.cvv}  onFocus={props.onFocus} onBlur={props.onBlur} onChange={props.onChange} maxLength="3"></input>
            </div>)
    }
    else {
        return (
            <div>

            </div>
        );
    }

};

export default Input;