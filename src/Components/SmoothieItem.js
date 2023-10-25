import Class from "./BreakfastItems.module.css";
export default function SmoothieItem(){
    return(<div className={Class.wraper} id="SmoothiesItem">
    <h2>Smoothies</h2>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Banana & Strawberry
Smoothie</h3>
            <h3>£4.50</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Summer Fruit Smoothie</h3>
            <h3>£4.50</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.lastitem}>
            <div className={Class.prices}><h3>Banana Smoothie</h3>
            <h3>£4.50</h3></div>
        </div>
    
        </div>
   
    </div>)}