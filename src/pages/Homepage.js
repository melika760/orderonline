import { Fragment } from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import AboutUs from "../Components/AboutUs";
import Reserve from "../Components/Reserve";
import Footer from "../Components/Footer";
export default function Homepage(props){
    return (
        <Fragment>
          <Nav/>
        <Header/>
        <AboutUs/>
        <Reserve/>
        <Footer/>
        </Fragment>
          );
}