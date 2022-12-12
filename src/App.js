import './App.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import { createContext, useState } from 'react';
import Authentication from './components/Authentication/Authentication';
import PrivateOutlet from './components/privateOutlet/PrivateOutlet';
import Shipment from './components/Shipment/Shipment';
// import Inventory from './components/Inventory/Inventory';
import ProductOverview from './components/ProductOverview/ProductOverview';
export const emaJohnContext= createContext();

function App() {
  const[cart, setCart] = useState([]);
  const[authUser, setAuthUser] = useState(null);
  return (
    <emaJohnContext.Provider value={[cart, setCart, authUser, setAuthUser]}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/shop' element={ < Shop/>} />
          <Route path='/review' element={ <Review/> } />
          <Route path='/login' element={<Authentication/>} />
          <Route path='/product/:productKey' element={ <ProductOverview/>} />
          <Route path='/*' element={ <PrivateOutlet/>} >
            <Route path='shipment' element={ <Shipment/>} />
            {/* <Route path='inventory' element={ <Inventory/>} /> */}
          </Route>
          <Route exact path='/' element={ <Shop/>} />
        </Routes>
      </Router>
    </emaJohnContext.Provider>
  );
}

export default App;
