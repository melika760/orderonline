import Class from "./BreakfastItems.module.css";
export default function JuiceItem(){
    return(<div className={Class.wraper} id="JuicesItem">
    <h2>Juices</h2>
    <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Freshly Squeezed Orange Juice</h3>
            <h3>£4.50</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Freshly Squeezed Grapefruit
Juice</h3>
            <h3>£4.50</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Apple Juice</h3>
            <h3>£2.95</h3></div>
        </div>
        <div className={Class.item}>
            <div className={Class.prices}><h3>Cranberry Juice</h3>
            <h3>£2.95</h3></div>
        </div>
        </div>
        <div className={Class.wrapItems}>
        <div className={Class.lastitem}>
            <div className={Class.prices}><h3>Blackcurrant Juice</h3>
            <h3>£2.95</h3></div>
        </div>
        </div>
   
    </div>)}