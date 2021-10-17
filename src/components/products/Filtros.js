import React from 'react';

export const Filtros = () => {
  return (
    <div className="Productos__filtros-main">
      <form className="Productos__filtros-form">
        <select
          className="Productos__filtros-form-selected"
          name="tipoProducto"
        >
          <option>Tipo de producto</option>
          <option value="lavalosa">Lavalosa</option>
          <option value="detergente">Detergente</option>
          <option value="limpiaVidrios">Limpia vidrio</option>
        </select>
        <select className="Productos__filtros-form-selected" name="precio">
          <option selected>Precio</option>
          <option> $0 - $1500 </option>
          <option> $1500 - $3000 </option>
          <option> $3000 - +$3000 </option>
        </select>
        <select className="Productos__filtros-form-selected" name="stock">
          <option selected>Stock</option>
          <option>0 - 10</option>
          <option>11 - 20</option>
          <option>20 +</option>
        </select>
        <input
          type="submit"
          className="btn btn-secondary btn-font-weight"
          value="aplicar"
        />
      </form>
    </div>
  );
};
