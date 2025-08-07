import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  const agregarProducto = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const quitarProducto = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <div className="contenedorBotones">
        <span>Cantidad a agregar: {cantidad}</span>
        <button className="btn-sumaResta" onClick={quitarProducto}>
          -
        </button>
        <button className="btn-sumaResta" onClick={agregarProducto}>
          +
        </button>
      </div>
      <div className="mt-3">
        <button
          className="btn-addToCart"
          onClick={() => onAdd(cantidad)}
          disabled={cantidad === 0 || stock === 0}
        >
          Agregar al carrito
        </button>
        {stock === 0 && <p>Producto sin stock</p>}
        {cantidad === stock && <p>Has alcanzado el límite de stock</p>}
      </div>
    </>
  );
}

export default ItemCount;
