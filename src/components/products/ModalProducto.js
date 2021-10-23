import { Button, Input, Modal, Spacer, Text } from '@nextui-org/react';
import React, { useState } from 'react';

export const ModalProducto = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <>
      <Button auto onClick={handler} color="secondary" auto ghost>
        Agregar Producto
      </Button>
      <Modal closeButton open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text h3>Agregar un Producto</Text>
        </Modal.Header>
        <Modal.Body>
          <Spacer y={1} />
          <Input
            type="text"
            bordered
            fullWidth
            color="secondary"
            labelPlaceholder="Nombre del producto"
          />
          <Spacer y={0.5} />
          <Input
            type="number"
            bordered
            fullWidth
            color="secondary"
            labelPlaceholder="Cantidad de Stock"
          />
          <Spacer y={0.1} />
          <Input type="file" color="secondary" label="Imagen del producto" />
        </Modal.Body>
        <Modal.Footer justify="center">
          <Button size="large" color="secondary" auto ghost>
            Agregar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
