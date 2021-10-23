import { Card, Grid, Row, Text } from '@nextui-org/react';
import React from 'react';

export const Producto = () => {
  return (
    <Grid xs={12} sm={6} md={4} lg={3}>
      <Card width="100%" clickable hoverable>
        <Card.Header justify="center">
          <h4>Nombre del producto</h4>
        </Card.Header>
        <Card.Body noPadding>
          <Card.Image
            autoResize={false}
            objectFit="cover"
            src="https://cdn.dimerc.cl/media/catalog/product/cache/1/thumbnail/x600/040ec09b1e35df139433887a97daa66f/6/7/67a04a90daa49e859f99c573ea9e47af.jpg"
            width="100%"
            alt="Card Example"
          />
        </Card.Body>
        <Card.Footer border color="primary" justify="flex-start">
          <Row justify="space-between">
            <Text size={15} color="white">
              Precio: $1000
            </Text>
            <Text size={15} color="white">
              Stock: 10
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
