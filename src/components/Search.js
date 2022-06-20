import React, { useState } from "react";

import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";
import products from "../assets/products.json";

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: 0, priceTo: Infinity });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true
  });

  const [displayedProducts, setDisplayedProducts] = useState(products);

  const onPriceInputChange = (name, value) => {
    setPrice((price) => ({ ...price, [name]: value }), filterProducts());
  };

  const onCheckboxClick = (name, checked) => {
    setColumns((columns) => ({ ...columns, [name]: checked }));
  };

  const filterProducts = () => {
    setDisplayedProducts(
      products.filter(
        (product) =>
          product.price >= price.priceFrom && product.price <= price.priceTo
      )
    );
  };

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={displayedProducts} columns={columns} />
    </div>
  );
};

export default Search;
