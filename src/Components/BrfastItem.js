import Styles from "../Components/Brfast.module.css";
import Brfast from "./Brfast";
export default function BrfastItem(props){
   
return(<div className={Styles.wraper} id={props.id}>
        <h2> {props.header}</h2>
        {props.item.map((item)=>{
        return(<Brfast title={item.title} description={item.description} prices={item.prices} key={item.id}/>)
    
    })}</div>

    )
}