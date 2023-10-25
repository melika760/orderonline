import Class from "./BreakfastItems.module.css";
export default function SaladItem(){
    return(<div className={Class.wraper} id="SaladItem">
    <h2>Salads</h2>
    <p className={Class.extra}>All Served with Pita Bread</p>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Dominiqu's Salad</h3>
            <h3>£10.95</h3></div>
         <p className={Class.description}>Mixed Lettuce, Avocado , Smoked Salmon & Mozzarella Cheese</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Chicken Caesar Salad</h3>
            <h3>£10.95</h3></div>
         <p className={Class.description}>Mixed Lettuce, Grilled Chicken, Croutons, Cucumber, Tomato & Caesar Dressing</p>
        </div>
        </div>
      
        <div className={Class.wrapItems}>
        <div className={Class.lastitem}>
            <div className={Class.prices} id="Greek"><h3>Greek Salad</h3>
            <h3>£9.95</h3></div>
         <p className={Class.description}>Mixed Lettuce, Feta Cheese, Olives Red Onions Cucumber & Tomato</p>
        </div>
        </div>
    </div>)
}