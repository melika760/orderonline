import Class from "./BreakfastItems.module.css";
export default function HotdrinksItem(){
    return(<div className={Class.wraper} id="HotdrinksItem">
    <h2>Hot drinks</h2>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Espresso</h3>
            <h3>Single £2.50</h3><h3>Double £2.70</h3></div>
            <p className={Class.description}>Short , Black , Strong Served with glass of Water</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Macchiato</h3>
            <h3>Single £2.50</h3><h3>Double £2.80</h3></div>
            <p className={Class.description}>Espresso with a dash of frothed Milk</p>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Americano</h3>
            <h3>Single £3.00</h3><h3>Double £3.30</h3></div>
            <p className={Class.description}>Espresso Served Long Black</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Latte</h3>
            <h3>Single £3.00</h3><h3> Double £3.30</h3></div>
            <p className={Class.description}>Espresso combined with Milk</p>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Cappuccino</h3>
            <h3>Single £3.00</h3><h3>Double £3.30</h3></div>
            <p className={Class.description}>Espresso combined with foamed Milk</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Mocha</h3>
            <h3>£3.50</h3></div>
            <p className={Class.description}>Espresso combined with Milk & Chocolate</p>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>FlatWhite</h3>
            <h3>£3.30</h3></div>
            <p className={Class.description}>Espresso combined with foamed Milk</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Chocolate</h3>
            <h3>£3.50</h3></div>
            <p className={Class.description}>Milk & Chocolate Powder</p>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Chocolate(Different Strengths)</h3>
            <h3>£4.00</h3></div>
            <p className={Class.description}>Classic-35%Cacao,Italian-35% Cacao & Dark-45%</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Chocolate Special</h3>
            <h3>£4.00</h3></div>
            <p className={Class.description}>Milk & Chocolate Powder with whipped Cream</p>
        </div>
        </div>
     
   
    </div>)}