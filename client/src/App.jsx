//import the app css
import './styles/App.css'
import{BrowserRouter as Router, Route, Routes}  from 'react-router';
import ReactDOM from "react-dom";

// Providers
import { ShoppingBagProvider } from './context/ShoppingBagContext'; 
import { FiltersProvider } from './context/FiltersContext';

//import components
/// layout
import Header from'./components/layout/Header';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';


// import utils
import Stripe from "./services/stripe";

//import pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import Shoppingbag from './pages/ShoppingBag/ShoppingbagPage';
import Mission from './pages/Mission/Mission';
import ProductDetails from './pages/Products/ProductDetailsPage';
import PaymentSuccess from "./pages/Checkout/PaymentSuccess";
import PaymentError from "./pages/Checkout/PaymentError";


//We decleare the function which is our main component, so a component should be a function an always starting with capital letter
const App = () =>{

  //inside the function always return something
  return (
  <div>
    <FiltersProvider>
      <ShoppingBagProvider>
      <Router>
      <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Products/>}/>
          {/* // <Route path='/shoppingbag' element={<Shoppingbag/>}/> */}
          <Route path='/purpose' element={<Mission/>}/>
          <Route path='/product/:productID' element={<ProductDetails/>}/>
          <Route path="/shoppingbag" element={<Stripe />} />
          <Route path="/payment/error" element={<PaymentError/>} />
          <Route path="/payment/success" element={<PaymentSuccess/>} />
        </Routes>
        <Footer/>
      </Router>
      </ShoppingBagProvider>
    </FiltersProvider>
  </div>

)
   
}

// we export the App function to be imported in the main.jsx
export default App