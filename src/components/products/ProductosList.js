import React from 'react';
import { Producto } from './Producto';

export const ProductosList = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 10, 11, 12, 13, 14,
    15, 16,
  ];
  return (
    <div>
      <ul className="Productos__list-products">
        {arr.map(e => (
          <Producto />
        ))}
      </ul>
    </div>
  );
};
