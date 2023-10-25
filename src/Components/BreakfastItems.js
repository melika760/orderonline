import Styles from "../Components/BreakfastItems.module.css";
export default function BreakfastItems(){
    return(   <div className={Styles.wraper} id="BreakfastItem">
        <h2> BREAK FAST</h2>
        <div className={Styles.wrapItems}>
        <div className={Styles.item}>
            <h3>Eggs on Toast:</h3>
            <div className={Styles.prices}><h3>Scramble</h3>
            <h3>£5.95</h3></div>
            <div className={Styles.prices}><h3>Fried</h3>
            <h3>£5.50</h3></div>
            <div className={Styles.prices}><h3>Poached</h3>
            <h3>£5.50</h3></div>
            <div className={Styles.prices}><h3>Smoked Salmon
Scramble</h3>
            <h3>£9.95</h3></div>
            <div className={Styles.prices}><h3>Royal Smoked Salmon
Scramble & Avocado</h3>
            <h3>£11.95</h3></div>
        </div>
        <div className={Styles.item}>
            <h3>Eggs Benedict:</h3>
            <div className={Styles.prices}><h3>Ham</h3>
            <h3>£8.95</h3></div>
            <div className={Styles.prices}><h3>Bacon</h3>
            <h3>£8.95</h3></div>
            <div className={Styles.prices}><h3>Spinach (V)</h3>
            <h3>£9.95</h3></div>
            <div className={Styles.prices}><h3>Salmon</h3>
            <h3>£10.95</h3></div>
        </div>
        </div>
        <div className={Styles.wrapItems}>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>Full English </h3>
            <h3>£10.95</h3></div>
         <p className={Styles.description}>2 Free Range Eggs,Cumberland Sausage,2 A1 Bacons,Grilled Tomato,Baked Beans,Mushroom and Toast</p>
        </div>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>Vegterian Breakfast (V) </h3>
            <h3>£10.95</h3></div>
         <p className={Styles.description}>2 Free Range Eggs, 2 Linda McCartney Sausages, 2 Hash Browns,Grilled Tomato,
Baked Beans, Mushroom and Toast</p>
        </div>
        </div>
        <div className={Styles.wrapItems}>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>Dominique's Special</h3>
            <h3>£9.95</h3></div>
         <p className={Styles.description}>2 Free Range Eggs, 2 Sausages,
2 A1 Bacons and a Pieces of Toast</p>
        </div>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>French Toast</h3>
            <h3>£6.95</h3></div>
         <p className={Styles.description}>Pan Fried Sliced French Baguette Dipped in Egg Yolk Served with Icing Sugar and Syrup (Add 2 Bacons<strong> £1.30</strong>) </p>
        </div>
        
        </div>
        <div className={Styles.wrapItems}>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>3 Egg Plain Omelette</h3>
            <h3>£6.95</h3></div>
         <p className={Styles.description}>Add 2 Toppings £8.95 Add Chips on the side <strong>£9.95</strong> </p>
        </div>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>Cheese on Toast</h3>
            <h3>£5.95</h3></div>
        </div>
        </div>
        <div className={Styles.wrapItems}>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>Welsh Rarebit (V)</h3>
            <h3>£6.95</h3></div>
        </div>
        <div className={Styles.item}>
            <div className={Styles.prices}><h3>Buck Rarebit (V)</h3>
            <h3>£8.00</h3></div>
        </div>
        </div>
        <div className={Styles.wrapItems}>
        <div className={Styles.lastitem}>
            <div className={Styles.prices}><h3>Choice of Ingredients:</h3>
            <h3>Each £1</h3></div>
            <p className={Styles.description}>Ham-Mushroom-Cheese-Tomato-onion Green Pepper</p>
        </div>
        </div>
    
    </div>)
}