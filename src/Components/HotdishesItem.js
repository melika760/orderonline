import Class from "./BreakfastItems.module.css";
export default function HotdishesItem(){
    return(<div className={Class.wraper} id="HotdishesItem">
    <h2>Hot dishes</h2>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Jacket Potato filled with Grated Cheese</h3>
            <h3>£5.95</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Jacket Potato filled with Cheese & Beans</h3>
            <h3>£6.95</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Jacket Potato filled with Tuna Mayo</h3>
            <h3>£7.95</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Jacket Potato filled with Prawn Mayo or Bolognese Sauce</h3>
            <h3>£8.95</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Jacket Potato filled with Ratatouille (V)</h3>
            <h3>£8.95</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Hot Jacket Potato filled with  Crispy bacon & Cheese</h3>
            <h3>£8.95</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Beef or Chicken Burger</h3>
            <h3>£11.95</h3></div>
            <p className={Class.description}>Served with Chips & Salad</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Beef Casserole</h3>
            <h3>£11.95</h3></div>
            <p className={Class.description}>Served with Rice & Salad</p>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices} id="Salmon"><h3>Grilled salmon Fillet</h3>
            <h3>£12.95</h3></div>
            <p className={Class.description}>Served with Chips & Salad</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Stuffed Aubergine (V)</h3>
            <h3>£11.95</h3></div>
            <p className={Class.description}>Served with Rice & Salad</p>
        </div>
        </div>
   
    </div>)}