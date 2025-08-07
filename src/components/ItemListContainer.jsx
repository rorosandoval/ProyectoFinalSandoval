import { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { app } from "../firebase";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ saludoInicial }) {
  const [productos, setProductos] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      handleGetProductByCategory();
    } else {
      handleGetProduct();
    }
  }, [category]);


  const handleGetProduct = () => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "productos");
    const orderProducts = getDocs(productsCollection);
    orderProducts
      .then((respuesta) => {
        const products = [];

        respuesta.docs.forEach((product) => {
          const finalProduct = {
            id: product.id,
            ...product.data(),
          };
          products.push(finalProduct);
        });
        setProductos(products);
      })
      .catch((error) => {
        console.error("Error al cargar los productos", error);
      });
  };

  const handleGetProductByCategory = () => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "productos");

    const filter = query(productsCollection, where("category", "==", category));

    const orderProducts = getDocs(filter);
    orderProducts
      .then((respuesta) => {
        const products = [];

        respuesta.docs.forEach((product) => {
          const finalProduct = {
            id: product.id,
            ...product.data(),
          };
          products.push(finalProduct);
        });
        setProductos(products);
      })
      .catch((error) => {
        console.error("Error al cargar los productos", error);
      });
  };

  return (
    <>
      <div className="container">
        <h1>{category ? `${category}` : saludoInicial}</h1>
        <p>Mostrando {productos.length} productos</p>
        <ItemList productos={productos} />
      </div>
    </>
  );
}

export default ItemListContainer;
