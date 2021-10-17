import React from 'react';

export const Producto = () => {
  return (
    <li className="Productos__producto">
      <div className="Productos__producto-img">
        <img
          src="https://cdn.dimerc.cl/media/catalog/product/cache/1/thumbnail/x600/040ec09b1e35df139433887a97daa66f/6/7/67a04a90daa49e859f99c573ea9e47af.jpg"
          alt="lavalosa"
        />
      </div>
      <div className="Producots__producto-title">
        <h3>Nombre del producto</h3>
      </div>
      <div className="Producots__producto-body">
        <p>
          Precio: <span className="Productos__producto-text-color">$1300</span>
        </p>
        <p>
          Sotck: <span className="Productos__producto-text-color">10</span>
        </p>
      </div>
    </li>
  );
};
