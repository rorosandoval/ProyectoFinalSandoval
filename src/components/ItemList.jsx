import Item from "./Item";
function ItemList({ productos }) {
  return (
    <div className="contenedorCards">
      {productos.map((producto, indice) => {
        return (
          <div key={indice}>
            <Item producto={producto} />
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
