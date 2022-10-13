import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Listproduct from './components/Listproduct';
import Cart from './components/Cart'
import { CartProvider } from 'react-use-cart';
import Menuhide from './components/Menuhide';
import Searchresponsive from './components/Searchresponsive';
function App(){
  const [show, setShow]  = useState(true)
  const [showMenu,setShowMenu] = useState(true)
  const [showSearch,setShowSearch] = useState(true)
  return (
    <div className="App" >
    <CartProvider>
         <Header setShow = {setShow} setShowMenu = {setShowMenu} setShowSearch = {setShowSearch}/>
         {show ? '' : <Cart setShow = {setShow} />}
         {showMenu ? '' : <Menuhide setShowMenu= {setShowMenu}/>}
         {showSearch ? '' : <Searchresponsive setShowSearch= {setShowSearch}/>}
         <Slider />
          <div className = "grid">
              <div className="row no-gutters col l-12">
                  <div className="text-product">
                        -Sản phẩm mới
                  </div>
              </div>
          </div>
        <Listproduct />
        <Footer />  
    </CartProvider>  
    </div>
  );
}

export default App;
