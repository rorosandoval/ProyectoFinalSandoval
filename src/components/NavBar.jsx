import CartWidget from "./CartWidget.jsx";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router";
import { useContext } from "react";
import { CartContext } from "../providers/CartContext.jsx";

function NavBar() {

const {totalAgregado }= useContext (CartContext); 
  

  return (
    <header className="container-fluid bg-navGreen">
      <NavLink to="/">
        <img className="logo" src="/img/logo.png" alt="logo" />
      </NavLink>
      <nav className="py-3 ">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/products/category/perifericos">Periféricos</NavLink>
        <NavLink to="/products/category/hardware">Hardware</NavLink>
        <NavLink to="/quienessomos">Quiénes Somos</NavLink>
      </nav>
      <NavLink to="/cart" >
      <CartWidget cantidad={totalAgregado} />
      </NavLink>
    </header>
  );
}

export default NavBar;
