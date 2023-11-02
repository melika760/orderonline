import { useState } from "react";
export default function useInput(validatevalue){
    const[enteredvalue,setenteredvalue]=useState("");
    const[touch,settouched]=useState(false)
    const ValueIsvalid=validatevalue(enteredvalue);
    const haserror=!ValueIsvalid && touch;
    function InputchangeHandler(event){
        setenteredvalue(event.target.value)
    }
    function blured(){
        settouched(true)
    }
return{enteredvalue,haserror,ValueIsvalid,InputchangeHandler,blured}
}