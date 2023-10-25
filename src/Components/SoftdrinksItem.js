import Class from "./BreakfastItems.module.css";
export default function SoftdrinksItem(){
    return(<div className={Class.wraper} id="SoftdrinksItem">
    <h2>Soft drinks</h2>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Iced Late</h3>
            <h3>£3.50</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Iced Americano</h3>
            <h3>£3.50</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Iced Coffee Special
</h3>
            <h3>£4.00</h3></div>
            <p className={Class.description}>Served with whipped cream</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Iced Coffee Superme</h3>
            <h3>£4.50</h3></div>
            <p className={Class.description}> Served with ice-cream</p>
        </div>
        </div>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Thick MilkShake</h3>
            <h3>£4.50</h3></div>
            <p className={Class.description}>Strawberry , Chocolate , Banana & Vanilla</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Coke, Diet Coke, Fanta &
Sprite</h3>
            <h3>£2.80</h3></div>
            <p className={Class.description}>330 ml</p>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.lastitem}>
            <div className={Class.prices}><h3>Still or Sparkling Water</h3>
            <h3>£2.80</h3></div>
            <p className={Class.description}>330 ml</p>
        </div>
        </div>
     
   
    </div>)}