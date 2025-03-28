import React, { memo, useCallback } from "react";

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = useCallback(
    (e) => {
      addProduct({ name, price });
      setName("");
      setPrice("");
      e.preventDefault();
    },
    [addProduct, name, price]
  );
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default memo(AddProductForm);