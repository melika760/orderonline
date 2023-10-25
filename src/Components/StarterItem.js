import Style from "./BreakfastItems.module.css"
export default function StarterItem(){
    return(<div className={Style.wraper} id="Starteritem">
    <h2>Starter</h2>
    <div className={Style.wrapItems}>
        <div className={Style.item}>
            <div className={Style.prices}><h3>Soup of the Day</h3>
            <h3>£5.95</h3></div>
         <p className={Style.description}>Served with Bread & Butter</p>
        </div>
        <div className={Style.item}>
            <div className={Style.prices}><h3>Humous</h3>
            <h3>£5.95</h3></div>
         <p className={Style.description}>Served with Pita Bread</p>
        </div>
        </div>
        <div className={Style.wrapItems}>
        <div className={Style.item}>
            <div className={Style.prices}><h3>Feta & Olives</h3>
            <h3>£5.95</h3></div>
         <p className={Style.description}>Served with Pita Bread</p>
        </div>
        <div className={Style.item}>
            <div className={Style.prices}><h3>Prawn Cocktail</h3>
            <h3>£6.95</h3></div>
         <p className={Style.description}>Served with Cocktail Sauce & Fresh Lemon</p>
        </div>
        </div>
        <div className={Style.wrapItems}>
        <div className={Style.lastitem}>
            <div className={Style.prices}><h3>Smoked Aubergine Dip</h3>
            <h3>£6.95</h3></div>
         <p className={Style.description}>Served with Pita Bread</p>
        </div>
        </div>
    </div>)}