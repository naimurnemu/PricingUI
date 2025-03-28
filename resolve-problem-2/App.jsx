import { useCallback, useState } from "react";
import AddProductForm from "./AddProductForm.jsx";
import ProductList from "./ProductList.jsx";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
  ]);

  const addProduct = useCallback(
    (product) =>
      setProducts((prev) => [...prev, { ...product, id: prev.length + 1 }]),
    []
  );

  return (
    <div>
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
