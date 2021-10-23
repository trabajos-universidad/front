import { Container, Grid, Spacer } from '@nextui-org/react';
import { ModalProducto } from './ModalProducto';
import { Producto } from './Producto';

export const ProductosList = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 10, 11, 12, 13, 14,
    15, 16,
  ];

  return (
    <div>
      <Container>
        <Spacer y={2} />
        <ModalProducto />
        <Spacer y={2} />
        <Grid.Container gap={2} justify="flex-start">
          {arr.map((e, i) => (
            <Producto key={i} />
          ))}
        </Grid.Container>
      </Container>
    </div>
  );
};
