import React, { useMemo } from "react";

const ProductList = ({ products }) => {
  const renders = useMemo(
    () => (
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    ),
    [products]
  );

  return renders;
};

export default ProductList;