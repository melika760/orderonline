import Class from "./BreakfastItems.module.css";
export default function SandwichItem(){
    return(<div className={Class.wraper} id="SandwichesItem">
    <h2>Sandwiches</h2>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <h3>Club Sandwich:</h3>
            <p>Served with White or Brown Bread & Garnish Salad.To add chips extra <strong>£1</strong></p>
            <div className={Class.prices}><h3>Bacon Chicken & Avocado</h3>
            <h3>£11.50</h3></div>
            <div className={Class.prices}><h3>Roasted Aubergine,Humous & Lettuce (V)</h3>
            <h3>£10.95</h3></div>
            <div className={Class.prices}><h3>Eggs Mayo (V)
</h3>
            <h3>£4.95</h3></div>
            <div className={Class.prices}><h3>Tuna Mayo</h3>
            <h3>£5.95</h3></div>
            <div className={Class.prices}><h3>Prawn Mayo</h3>
            <h3>£5.95</h3></div>
            <div className={Class.prices}><h3>Prawn & Avocado
</h3>
            <h3>£7.95</h3></div>
            <div className={Class.prices}><h3>Smashed Avocado on Toast 
</h3>
            <h3>£6.95</h3></div>
        </div>
        <div className={Class.item}>
            <h3>Hot Sandwiches:</h3>
            <p>All Hot Sandwiches Served with Chips & Salad</p>
            <div className={Class.prices}><h3>Bacon & Cheese Melt</h3>
            <h3>£10.95</h3></div>
            <div className={Class.prices}><h3>Tuna Mayo & Cheese
Melt</h3>
            <h3>£10.95</h3></div>
            <div className={Class.prices}><h3>Tomato,Onion,Green
Pepper,Mozzarella Cheese
Melt </h3>
            <h3>£9.95</h3></div>
        </div>
        </div>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Bacon or Sausage</h3>
            <h3>£4.95</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Egg & Bacon or Sausage</h3>
            <h3>£5.50</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Bacon & Avocado</h3>
            <h3>£5.95</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Bacon, Lettuce & Tomato</h3>
            <h3>£5.95</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Cheese & Tomato (V)</h3>
            <h3>£4.95</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Ham & Cheese</h3>
            <h3>£5.50</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Mozzarella, Tomato &
Pesto (V)</h3>
            <h3>£5.50</h3></div>

        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Side Order:</h3>
            <h3>Each £4.00</h3></div>
            <p className={Class.description}>portion of Chips-Side Salad- Side Marinated Olive-Feta Cheese</p>

        </div>
        </div>
   
    </div>)}