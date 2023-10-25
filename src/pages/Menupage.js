import { Fragment } from "react";
import Nav from "../Components/Nav";
import Menue from "../Components/Menue";
import Footer from "../Components/Footer";



export default function Menupage(props){
    return(
        <Fragment>
            <Nav/>
            <Menue/>
          
            <Footer/>
        </Fragment>
    )
}