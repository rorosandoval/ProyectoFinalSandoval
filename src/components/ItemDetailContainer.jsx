import { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { collection, getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const handleGetDetail = async () => {
      const db = getFirestore(app);
      const productsCollection = collection(db, "productos");

      const docRef = doc(productsCollection, id);

      try {
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setItem({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.error("No se encontró el producto con el ID:", id);
          setItem(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setItem(null);
      }
    };

    handleGetDetail();
  }, [id]);

  if (!item) {
    return <div className="container">Cargando producto...</div>;
  }

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
