import styles from "./Menue.module.css";
import pasta from "../img/spaguetti.png";
import Breakfast from "../img/english-breakfast.png";
import Starters from "../img/Starter.png";
import Salad from "../img/salad.png";
import Hotdishes from "../img/Hotdishes.png";
import Sandwwich from '../img/sandwich.png';
import Juices from "../img/juices.png";
import Smoothies from "../img/smoothie.png";
import Softdrinks from "../img/Softdrink.png";
import Hotdrinks from "../img/Hotdrinks.png";
import BreakfastItems from "../Components/BreakfastItems";
import {HashLink as Link } from "react-router-hash-link";
import StarterItem from "./StarterItem";
import SaladItem from "./SaladItem";
import PastaItem from "./PastaItem";
import HotdishesItem from "./HotdishesItem";
import SandwichItem from "./SandwichItem";
import JuiceItem from "./JuiceItem";
import SmoothieItem from "./SmoothieItem";
import SoftdrinksItem from "./SoftdrinksItem";
import HotdrinksItem from "./HotdrinksItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faArrowUp} from "@fortawesome/free-solid-svg-icons"

export default function Menue(){
    function Gotop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const MenuLists=<div className={styles.wraper}>
        <Link to="#BreakfastItem"className={styles.col} smooth><div >
        <img src={Breakfast} alt="Breakfast"/>  <p>Breakfast</p></div></Link>
        <Link to="#Starteritem"className={styles.col} smooth>  <div>
        <img src={Starters} alt="Starter"/> <p>Starter</p> </div></Link>
        <Link to="#SaladItem"className={styles.col} smooth><div >
        <img src={Salad} alt="Salad"/>  <p>Salad</p></div></Link>
        <Link to="#PastaItem"className={styles.col} smooth><div >
        <img src={pasta} alt="Pasta"/>  <p>Pasta</p></div></Link>
        <Link to="#HotdishesItem"className={styles.col} smooth><div >
        <img src={Hotdishes} alt="Hotdishes"/>  <p>Hot Dishes</p></div></Link>
        <Link to="#SandwichesItem"className={styles.col} smooth><div >
        <img src={Sandwwich} alt="Sandwiches"/>  <p>Sandwiches</p></div></Link>
        <Link to="#JuicesItem"className={styles.col} smooth><div >
        <img src={Juices} alt="Juices"/>  <p>Juices</p></div></Link>
        <Link to="#SmoothiesItem"className={styles.col} smooth><div >
        <img src={Smoothies} alt="Smoothies"/>  <p>Smoothies</p></div></Link>
        <Link to="#SoftdrinksItem"className={styles.col} smooth><div >
        <img src={Softdrinks} alt="Softdrinks"/>  <p>Soft Drinks</p></div></Link>
   <Link to="#HotdrinksItem"className={styles.col} smooth><div >
        <img src={Hotdrinks} alt="Hotdrinks"/>  <p>Hot Drinks</p></div></Link>
     
       
        
        
       
       
       
      
        </div>
    return(<div className={styles.mobile}>
        <h1 className={styles.header}>Foods & Drinks</h1>
        {MenuLists}
       <BreakfastItems/>
       <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <StarterItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <SaladItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <PastaItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <HotdishesItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <SandwichItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <JuiceItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <SmoothieItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <SoftdrinksItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
        <HotdrinksItem/>
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
    </div>)
}