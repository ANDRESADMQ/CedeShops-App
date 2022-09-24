import { GlobalStyle } from "./globalStyles";
//import { Topbar } from "./components/Topbar";
//import { Menu} from "./components/Menu";
import { Navigation } from "./pages/Navigation";
import { BrowserRouter } from "react-router-dom";

export const App = () => (
 <BrowserRouter> 
    <GlobalStyle/>
    <Navigation />
  </BrowserRouter> 
)