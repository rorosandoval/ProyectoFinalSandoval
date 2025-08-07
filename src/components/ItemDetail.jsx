import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../providers/CartContext";
import Swal from "sweetalert2";

function ItemDetail({ item }) {
  const { agregarAlCarrito, cart } = useContext(CartContext);

  const stock = item.stock;

  if (!item) {
    return <p>Cargando detalles del producto...</p>;
  }

  const handleOnAdd = (cantidadAAgregar) => {
    if (cantidadAAgregar > 0) {
      agregarAlCarrito(item, cantidadAAgregar);
      Swal.fire({
        title: "Producto agregado",
        text: `Agregaste ${cantidadAAgregar} unidades de ${item.name} al carrito.`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    }
  };
  return (
    <div className="contenedor-ItemDetail">
      <div>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className="contenedor-detail">
        <h4>{item.brand}</h4>
        <h2>{item.name}</h2>
        <p className="precio">
          {Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
          }).format(item.price)}
        </p>
        <p>{item.description}</p>
        <p>{item.warrantyInformation}</p>
        <p>Disponibilidad: {item.stock} en stock.</p>
        <ItemCount stock={stock} onAdd={handleOnAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;
