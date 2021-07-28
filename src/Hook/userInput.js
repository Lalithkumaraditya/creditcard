import { useState } from "react";

const useInput=(validateValue)=>{
    const [enterdInput,setEnterdInput]=useState('');
    const [isTouched,setIsTouched]=useState(false);

    const valueIsValid=validateValue(enterdInput);
    const  hasError=!valueIsValid && isTouched;
    const valueChangeHandler = event => {
        setEnterdInput(event.target.value);
      }
      const inputBlurHandler=(event)=>{
        setIsTouched(true);
     
       }
       const inputReset=()=>{
        setEnterdInput('');
        setIsTouched(false);
       }

    return{
        value:enterdInput,hasError,valueChangeHandler,inputBlurHandler,inputReset,isValid:valueIsValid
    }
}
export default useInput;