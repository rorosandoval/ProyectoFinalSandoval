import { useState, useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../firebase";
import { CartContext } from "../providers/CartContext";
import Swal from "sweetalert2";

function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleCompra = () => {
    const db = getFirestore(app);
    const ventasCollection = collection(db, "ventas");

    const cartSave = cart.map(({ item, cantidad }) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      cantidad,
    }));

    const totalCompra = cart.reduce(
      (acc, prod) => acc + prod.item.price * prod.cantidad,
      0
    );

    const elPedido = addDoc(ventasCollection, {
      nombre: nombre,
      telefono: telefono,
      email: email,
      carrito: cartSave,
      totalCompra: totalCompra,
      direccionDeEntrega: direccion,
      fecha: new Date(),
    });

    elPedido
      .then((respuesta) => {
        Swal.fire({
          title: "Compra exitosa",
          text: `Tu compra con el número de orden ${respuesta.id} y un valor de $${totalCompra} está siendo procesada.`,
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#51869d",
        });

        setNombre("");
        setTelefono("");
        setEmail("");
        setDireccion;
        clearCart([]);
      })
      .catch((error) => {
        Swal.fire({
          title: "¡Ups!",
          text: "Ocurrió un error al procesar tu orden. Por favor, intenta nuevamente.",
          icon: "error",
          confirmButtonText: "Entendido",
        });
        console.log(error);
      });
  };

  return (
    <div>
      <hr />
      <h4>Ingresa tus datos para realizar la compra</h4>
      <div className="mb-3">
        <label htmlFor="nombre">Nombre</label>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre y Apellido"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="telefono">Teléfono</label>
        <input
          className="form-control"
          type="text"
          placeholder="+56912345678"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="tumail@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="direccion">Dirección de entrega</label>
        <input
          className="form-control"
          type="text"
          placeholder="Calle Falsa 123. Ciudad. Región. País."
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <button className="btn-addToCart" onClick={handleCompra}>
          Realizar Compra
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
