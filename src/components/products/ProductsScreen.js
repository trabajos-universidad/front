import React from 'react';
import { Filtros } from './Filtros';
import { ProductosList } from './ProductosList';

export const ProductsScreen = () => {
  return (
    <div className="Productos__main">
      <Filtros />
      <ProductosList />
    </div>
  );
};
