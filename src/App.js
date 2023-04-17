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
      </Routes>
    </AppStyled>
  );
}

export default App;
