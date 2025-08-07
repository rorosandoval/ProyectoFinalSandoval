import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const existeEnCarrito = cart.some((prod) => prod.item.id === item.id);

    if (existeEnCarrito) {
      const nuevoCarrito = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return {
            ...prod,
            cantidad: prod.cantidad + cantidad,
          };
        }
        return prod;
      });
      setCart(nuevoCarrito);
    } else {
      setCart((prevCart) => [...prevCart, { item, cantidad }]);
    }
  };

  const cantidadTotal = cart.reduce((total, prod) => total + prod.cantidad, 0);

  const clearCart = () => {
    setCart([]);
  };

  const elValordelContexto = {
    cart,
    cantidadTotal,
    agregarAlCarrito,
    clearCart,
  };

  return (
    <CartContext.Provider value={elValordelContexto}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;