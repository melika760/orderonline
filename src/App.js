
import { Route,Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import ContactUs from "./Components/ContactUs";

function App() {
  return (

<Switch>
  <Route path='/' exact><Homepage/></Route>
  <Route path="/Menu" exact><Menupage/></Route>
  <Route path="/Contact" exact><ContactUs/></Route>
</Switch>



  );
}

export default App;
