import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bestseller from "./pages/Bestseller";
import CustomerService from "./pages/CustomerService";
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import Prime from "./pages/Prime";
import Contact from "./pages/Contact";
import ProductDetails from "./components/ProductDetails";
import styled from "styled-components";
import MensClothing from "./components/Categories/MensClothing";
import WomensClothing from "./components/Categories/WomensClothing";
import Jewelery from "./components/Categories/Jewelery";
import Electronics from "./components/Categories/Electronics";

const AppStyled = styled.div``;

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bestseller" element={<Bestseller />}></Route>
        <Route path="/bestseller/:id" element={<ProductDetails />} />
        <Route path="/sale" element={<Sale />}></Route>
        <Route path="/prime" element={<Prime />}></Route>
        <Route path="/service" element={<CustomerService />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/mensClothing" element={<MensClothing />}></Route>
        <Route path="/womensClothing" element={<WomensClothing />}></Route>
        <Route path="/jewelery" element={<Jewelery />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
      </Routes>
    </AppStyled>
  );
}

export default App;
