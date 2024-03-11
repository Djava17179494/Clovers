import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Support from "./components/Support/Support"
import Products from "./components/Products/Products"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import Summary from "./components/Summary/Summary"
import MoreProducts from "./components/MoreProducts/MoreProducts"

function App() {
  return (
   <Routes>
    <Route path={"/"}  element={ <Home/> } />
    <Route path={"/about"}  element={ <About/> } />
    <Route path={"/support"}  element={ <Support/> } />
    <Route path={"/products"}  element={ <Products/> } />
    <Route path={"/productDetails"}  element={ <ProductDetails/> } />
    <Route path={"/summary"}  element={ <Summary/> } />
    <Route path={"/moreProducts"}  element={ <MoreProducts/> } />
   </Routes>
  );
}

export default App;
