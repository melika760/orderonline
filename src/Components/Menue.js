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
import {HashLink as Link } from "react-router-hash-link";
import SandwichItem from "./SandwichItem";
import HotdrinksItem from "./HotdrinksItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faArrowUp} from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import BrfastItem from "./BrfastItem";
import useHttp from "../hooks/use-http";
import useManage from "../hooks/use-manage";

export default function Menue(){
    const{transformdata:Breakfasttransformed,item:Breakfastitem}=useManage();
    const{transformdata:Startertransformed,item:Starteritem}=useManage();
    const{transformdata:Pastatransformed,item:Pastaitem}=useManage();
    const{transformdata:Saladtransformed,item:Saladitem}=useManage();
    const{transformdata:Hotdishestransformed,item:Hotdishesitem}=useManage();
    const{transformdata:juicestransformed,item:juicesitem}=useManage();
    const{transformdata:Smoothietransformed,item:Smoothiesitem}=useManage();
    const{transformdata:Softdrinkstransformed,item:Softdrinksitem}=useManage();
const{sendRequest:fetchmeal,loading,error}=useHttp();
const{sendRequest:fetchstarter}=useHttp();
const{sendRequest:fetchPasta}=useHttp();
const{sendRequest:fetchSalad}=useHttp();
const{sendRequest:fetchHotdishes}=useHttp();
const{sendRequest:fetchJuices}=useHttp();
const{sendRequest:fetchSmoothie}=useHttp();
const{sendRequest:fetchSoftdrink}=useHttp();
    useEffect(()=>{
        fetchmeal({url:"https://dominique-5aac4-default-rtdb.firebaseio.com/Breakfast.json"},Breakfasttransformed);
        fetchstarter({url:"https://dominique-5aac4-default-rtdb.firebaseio.com/Starter.json"},Startertransformed);
        fetchPasta({url:"https://dominique-5aac4-default-rtdb.firebaseio.com/Pasta.json"},Pastatransformed);
        fetchSalad({url:"https://dominique-5aac4-default-rtdb.firebaseio.com/Salad.json"},Saladtransformed);
        fetchHotdishes({url:"https://dominique-5aac4-default-rtdb.firebaseio.com/HotDishes.json"},Hotdishestransformed);
        fetchJuices({url:"https://dominique-5aac4-default-rtdb.firebaseio.com/Juices.json"},juicestransformed);
        fetchSmoothie({url:"https://dominique-5aac4-default-rtdb.firebaseio.com/Smoothie.json"},Smoothietransformed);
        fetchSoftdrink({url:"https://dominique-5aac4-default-rtdb.firebaseio.com/Softdrinks.json"},Softdrinkstransformed);
    
    },[fetchmeal,fetchstarter,fetchPasta,fetchSalad,fetchHotdishes,Breakfasttransformed,Startertransformed,Pastatransformed,Saladtransformed,Hotdishestransformed,
    fetchJuices,juicestransformed,fetchSmoothie,Smoothietransformed,fetchSoftdrink,Softdrinkstransformed])
  
 console.log(Breakfastitem)
   
    function Gotop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const MenuLists=<div className={styles.wraper}>
        <Link to="#Breakfastitem" className={styles.col} smooth><div >
        <img src={Breakfast} alt="Breakfast"/>  <p>Breakfast</p></div></Link>
        <Link to="#Starteritem"className={styles.col} smooth>  <div>
        <img src={Starters} alt="Starter"/> <p>Starter</p> </div></Link>
        <Link to="#Saladitem"className={styles.col} smooth><div >
        <img src={Salad} alt="Salad"/>  <p>Salad</p></div></Link>
        <Link to="#Pastaitem"className={styles.col} smooth><div >
        <img src={pasta} alt="Pasta"/>  <p>Pasta</p></div></Link>
        <Link to="#Hotdishesitem"className={styles.col} smooth><div >
        <img src={Hotdishes} alt="Hotdishes"/>  <p>Hot Dishes</p></div></Link>
        <Link to="#SandwichesItem"className={styles.col} smooth><div >
        <img src={Sandwwich} alt="Sandwiches"/>  <p>Sandwiches</p></div></Link>
        <Link to="#Juicesitem"className={styles.col} smooth><div >
        <img src={Juices} alt="Juices"/>  <p>Juices</p></div></Link>
        <Link to="#Smoothiesitem"className={styles.col} smooth><div >
        <img src={Smoothies} alt="Smoothies"/>  <p>Smoothies</p></div></Link>
        <Link to="#Softdrinksitem"className={styles.col} smooth><div >
        <img src={Softdrinks} alt="Softdrinks"/>  <p>Soft Drinks</p></div></Link>
   <Link to="#HotdrinksItem"className={styles.col} smooth><div >
        <img src={Hotdrinks} alt="Hotdrinks"/>  <p>Hot Drinks</p></div></Link>
       
      
        </div>
        let goTop=
        <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
    return(<div className={styles.mobile}>
        <h1 className={styles.header}>Foods & Drinks</h1>
        {MenuLists}
        <BrfastItem item={Breakfastitem} header="Breakfast" error={error} loading={loading} id="Breakfastitem"/>
      {goTop}
    {/* <StarterItem/> */}
    <BrfastItem item={Starteritem} header="Starter" error={error} loading={loading} id="Starteritem" />
    {goTop}
    <BrfastItem item={Saladitem} header="Salad" error={error} loading={loading} id="Saladitem" />
        {goTop}
        <BrfastItem item={Pastaitem} header="Pasta" error={error} loading={loading} id="Pastaitem" />
        {goTop}
        <BrfastItem item={Hotdishesitem} header="Hot Dishes" error={error} loading={loading} id="Hotdishesitem" />
        {goTop}
        <SandwichItem/>
        {goTop}
        <BrfastItem item={juicesitem} header="Juices" error={error} loading={loading} id="Juicesitem" />
        {goTop}
        <BrfastItem item={Smoothiesitem} header="Smoothies" error={error} loading={loading} id="Smoothiesitem" />
        {goTop}
        <BrfastItem item={Softdrinksitem} header="Soft Drinks" error={error} loading={loading} id="Softdrinksitem" />
        {goTop}
        <HotdrinksItem/>
        {goTop}
    </div>)
}