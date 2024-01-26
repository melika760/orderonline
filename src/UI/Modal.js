import ReactDom from "react-dom";
import styles from "./Modal.module.css";
import { Fragment } from "react";
const Backdrop=props=>{
    return(<div className={styles.backdrop} onClick={props.Onclose}></div>)
}
const Modaloverley=props=>{
    return(<div className={styles.modalover}>{props.children}</div>)
}
export default function Modal(props){
return(<Fragment>
    {ReactDom.createPortal(<Backdrop onClick={props.Onclose}/>,document.getElementById("Overleys"))}
    {ReactDom.createPortal(<Modaloverley>{props.children}</Modaloverley>,document.getElementById("Overleys"))}
</Fragment>)
}