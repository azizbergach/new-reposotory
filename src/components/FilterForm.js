import React from "react";

export const FilterForm = (props) => {
  const onPriceInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    props.onPriceInputChange(name, parseInt(value));
  };

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..."
        onChange={onPriceInputChange}
        value={props.priceFrom}
      />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..."
        onChange={onPriceInputChange}
        value={props.priceTo}
      />
    </div>
  );
};
