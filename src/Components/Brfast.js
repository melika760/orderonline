import Styles from "../Components/Brfast.module.css";
import MealItemForm from "./MealItem/MealItemForm";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
export default function Brfast(props){
  const ctx = useContext(CartContext);
  function AddToCart(amount){
      ctx.addItem({
          id:props.id,
          name:props.title,
          price:props.prices,
          amount:amount

      })
  }
return(<div>
      <div className={Styles.wrapItems}>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>{props.title} </h3>
            <h3>£{props.prices}</h3></div>
         <p className={Styles.description}>{props.description}</p>
        <MealItemForm AddAmount={AddToCart}/>
        </div>
        </div>
        </div>
)
}