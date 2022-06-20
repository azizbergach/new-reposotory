import React from "react";

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{props.columns.id && product.id}</td>
              <td>{props.columns.name && product.name}</td>
              <td>{props.columns.department && product.department}</td>
              <td>{props.columns.price && product.price}</td>
              <td>{props.columns.currency && product.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
