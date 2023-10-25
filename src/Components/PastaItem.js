import Class from "./BreakfastItems.module.css";
export default function PastaItem(){
    return(<div className={Class.wraper} id="PastaItem">
    <h2>Pasta</h2>
    <p className={Class.extra}>All pasta dishes can be served either Spaghetti or Penne</p>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Ricotta Cheese & Spinach Ravioli</h3>
            <h3>£9.95</h3></div>
         <p className={Class.description}>Served with Napoli Sauce</p>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Beef Lasagna</h3>
            <h3>£10.95</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Spaghetti Bolognese</h3>
            <h3>£10.95</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices} id="spaghetti"><h3>Spaghetti Napoli (V)</h3>
            <h3>£8.95</h3></div>
        </div>
        </div>
      
        <div className={Class.wrapItems}>
        <div className={Class.lastitem}>
            <div className={Class.prices}><h3>Pesto Pasta (V)</h3>
            <h3>£8.95</h3></div>
        </div>
        </div>
    </div>)
}