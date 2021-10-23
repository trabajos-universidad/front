import { Button, Container, Row, Spacer } from '@nextui-org/react';
import React from 'react';

export const Filtros = () => {
  return (
    <Container>
      <Spacer y={1.5} />
      <Row justify="center">
        <form className="opciones">
          <select name="tipoProducto">
            <option defaultValue="none">Tipo de producto</option>
            <option defaultValue="lavalosa">Lavalosa</option>
            <option defaultValue="detergente">Detergente</option>
            <option defaultValue="limpiaVidrios">Limpia vidrio</option>
          </select>
          <select name="precio">
            <option defaultValue="none">Precio</option>
            <option defaultValue="$0 - $1500"> $0 - $1500 </option>
            <option defaultValue="$1500 - $3000"> $1500 - $3000 </option>
            <option defaultValue="$1500 - $3000"> $3000 - +$3000 </option>
          </select>
          <select name="stock">
            <option defaultValue="none">Stock</option>
            <option defaultValue="0 - 10">0 - 10</option>
            <option defaultValue="11 - 20">11 - 20</option>
            <option defaultValue="20 +">20 +</option>
          </select>
          <Button
            type="submit"
            color="secondary"
            auto
            ghost
            auto
            style={{ marginTop: '9px', marginRight: '5px' }}
          >
            Aplicar
          </Button>
        </form>
      </Row>
    </Container>
  );
};
