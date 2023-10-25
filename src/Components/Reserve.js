import styles from "./Reserve.module.css";
import Button from "../UI/Button";
export default function Reserve(){
    return(<div className={styles.wraper}>
        <h3>Book a Table</h3>
        <form className={styles.form}>
        <input type="date" placeholder="Date" className={styles.num}/>
        <input type="time"  placeholder="Date" className={styles.set}/>
        <input type="number" min={0}  placeholder="Number" className={styles.num}/>
        <Button className={styles.btn}>Book</Button>
    </form></div>)
}