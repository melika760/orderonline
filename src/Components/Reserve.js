import styles from "./Reserve.module.css";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import useInput from "../hooks/use-input";
import Button from "../UI/Button";
export default function Reserve(){
    const[modal,setmodal]=useState(false);
    let{enteredvalue:enteredDate,haserror:Datehaserror,ValueIsvalid:DateisValid,InputchangeHandler:DateChangehandler,blured:Dateblured,setenteredvalue:setdate}=useInput(value=>value.trim()!=="")
    let{enteredvalue:enteredName,haserror:Namehaserror,ValueIsvalid:NameisValid,InputchangeHandler:NameChangehandler,blured:Nameblured,setenteredvalue:setName}=useInput(value=>value.trim()!=="")
    let{enteredvalue:enteredTime,haserror:Timehaserror,ValueIsvalid:TimeisValid,InputchangeHandler:TimeChangehandler,blured:Timeblured,setenteredvalue:settime}=useInput(value=>value.trim()!=="")
    let{enteredvalue:enteredNum,haserror:Numhaserror,ValueIsvalid:NumisValid,InputchangeHandler:NumChangehandler,blured:Numblured,setenteredvalue:setnum}=useInput(value=>value.trim()!=="" && value<5)
//   async function postdetails(){
//     const response=await fetch("https://dominique-5aac4-default-rtdb.firebaseio.com/order.json",{method:"POST",body:JSON.stringify()})
//   }
//     useEffect(()=>{},[])
    function Submithandler(event){
        event.preventDefault();
    }
    function closecard(){
        setmodal(false);
        // setdate(enteredDate="");
        // setName(enteredName="")
        // settime(enteredTime="");
        // setnum(enteredNum="");
    }
    function Showform(){
        const formisNotvalid=!DateisValid || !NameisValid || !TimeisValid || !NumisValid;
        if(formisNotvalid){
            setmodal(false)
            return;
        }
        setmodal(true);
        
     }
    return(<div className={styles.wraper}>
        <h3>Book a Table</h3>
        <form className={styles.form} onSubmit={Submithandler}>
        <input type="text"  placeholder="Name" className={Namehaserror?styles.eror : styles.num} value={enteredName} onChange={NameChangehandler} onBlur={Nameblured}/>
        
        <input type="number" min={0}  placeholder="Number" className={Numhaserror?styles.eror:styles.num} value={enteredNum} onChange={NumChangehandler} onBlur={Numblured}/>
        
        <input type="date" placeholder="Date" className={Datehaserror?styles.eror:styles.num}  value={enteredDate} onChange={DateChangehandler} onBlur={Dateblured} />
    
        <input type="time"  placeholder="Date" className={Timehaserror?styles.erors:styles.set}  value={enteredTime} onChange={TimeChangehandler} onBlur={Timeblured}/>
        {(Namehaserror || Numhaserror || Datehaserror|| Timehaserror) && <p className={styles.errors}>Please fill in all required fields and numbers of people should be less than 5!</p>} 
        <Button className={styles.btn} type="button" onClick={Showform}>Book</Button>
        
  
    </form>
   
    {modal && <Modal Onclose={closecard}>
        <div className={styles.wrapform}><h3>Hello {enteredName}!</h3>
        <p>You booked a table for {enteredNum} at {enteredTime} in {enteredDate}</p> 
        <p>We hope you enjoy your Time at Dominique's Cafe</p>
        <Button className={styles.closebtn} type="button" onClick={closecard}>Close</Button></div></Modal>}
    </div>)
}