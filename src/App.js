import { useState } from "react";
import { Route,Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import ContactUs from "./Components/ContactUs";
import CartProvider from "./Store/CartProvider";
import Cart from "./Cart/Cart";
import Nav from "./Components/Nav";

function App() {  const[CartIsShown, setCartIsShown]=useState(false)
  function hideCartHandler(){
    setCartIsShown(false)
  }
  function ShowCartHandler(){
    setCartIsShown(true)
  }
  return (
<CartProvider>
<Nav onShow={ShowCartHandler}/>
<Switch>
{CartIsShown && <Cart onClose={hideCartHandler}/>}
  <Route path='/' exact><Homepage/></Route>
  <Route path="/Menu" exact><Menupage/></Route>
  <Route path="/Contact" exact><ContactUs/></Route>
</Switch>
</CartProvider>


  );
}

export default App;
