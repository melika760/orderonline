import Styles from "../Components/Brfast.module.css";
export default function Brfast(props){
return(<div>
      <div className={Styles.wrapItems}>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>{props.title} </h3>
            <h3>£{props.prices}</h3></div>
         <p className={Styles.description}>{props.description}</p>
        </div>
        </div>
        </div>
)
}