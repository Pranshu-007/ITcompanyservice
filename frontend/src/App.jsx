import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./page/home";
import {About} from "./page/about";
import {Contact} from "./page/contact";
import {Service} from "./page/service";
import {Login} from "./page/login";
import {Logout} from "./page/logout";
import {Register} from "./page/registration";
import {Navbar} from "./component/Navbar";
import {Error} from "./page/error";
import {Footer} from "./component/Footer/footer"
import { useAuth } from "./store/auth";

export const App = () => {

  useAuth();

  return (
    <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/logout" element={<Logout/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/registration" element={<Register/>} />
    <Route path="*" element={<Error />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  </>
  )
}

export default App;