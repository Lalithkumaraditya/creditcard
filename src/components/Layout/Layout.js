import React, { useState } from 'react';

import FlipCard from '../UI/FlipCard/FlipCard';
import Input from '../UI/Input/Input';
import Select from '../UI/select/Select';
import classes from './Layout.module.css';
import { getCardType } from '../../utils/cardTypes'

const Layout = () => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041]
    const [card, setCard] = useState('#### #### #### ####');
    const [name, setName] = useState('Full Name');
    const [month, setMonth] = useState('01');
    const [year, setYear] = useState('2022');
    const [cardType, setCardType] = useState('');
    const [cvvValue,setCvvValue] = useState('');
    const onCardChangeHandler = (event) => {
        let value = event.target.value + "";
        setCard(value);
        if (event.target.value.replace(/ /g, '').length === 9) {
            console.log('1')
            let carType = getCardType(event.target.value.replace(/ /g, ''));
            console.log('2')
            setCardType(carType);
        }
        if(event.target.value.replace(/ /g, '').length === 0){
            setCardType('');
        }

        return event.target.value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }

    const onNameChangeHandler = (event) => {
        let name = event.target.value;
        setName(name);
    }
    const onCvvFocusHandler = () => {
        setCvvFocus(true);
    }
    const onBlurHandler = (event) => {
        if(cvvValue===''){
           
        }
        else{
         
        }
        setCvvFocus(false);
    }
    const onBlurNumberHandler = (event) => {
        if (event.target.value === '') {
            setCard('#### #### #### ####');
        }
    }
    const monthChangeHandler = (event) => {
        setMonth(event.target.value)
    }
    const yearChangeHandler = (event) => {
        setYear(event.target.value)
    }
    const onCvvChangeHandler=(event)=>{
        let value=event.target.value;
     
        if(value.length >=1){
         
        }
        value.length ===0 && setCvvValue('');
        value.length ===1 && setCvvValue('*') 
        value.length ===2 && setCvvValue('**') 
        value.length ===3 && setCvvValue('***') 
        
    }
    const [cvvFocus, setCvvFocus] = useState(true);


    return (
        < div className={classes.layoutContainer} >
            {/* <Card number={card} name={name} /> */}
            <FlipCard number={card} name={name} cvvFocus={cvvFocus} month={month} year={year} cardType={cardType} cvv={cvvValue} />
            <div className={classes.formContainer}>
                <div className={classes.spacing}>
                    <Input type="card" label="Card Number" onChange={onCardChangeHandler} onBlur={onBlurNumberHandler} />
                    
                    <br></br>
                    <Input type="name" label="Card Holders" onChange={onNameChangeHandler} />
                </div>
                <div className={classes.row}>

                    <Select options={months} onChange={monthChangeHandler} />
                    <Select options={years} onChange={yearChangeHandler} />
                    <div className={classes.cvvInput}>
                    <Input type="cvv" label="CVV" onFocus={onCvvFocusHandler}  onBlur={onBlurHandler} onChange={onCvvChangeHandler} />
                    {/* {!cvvValid &&<span>Invalid Cvv</span>} */}
                    </div>
                </div>
                <div className={classes.btnspacing}>
                    <button className={classes.submitBtn}>Submit</button></div>
            </div>
        </div>
    );
};

export default Layout;