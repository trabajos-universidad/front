import {
  Button,
  Col,
  Container,
  Input,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react';
import React from 'react';

export const LoginScreen = () => {
  return (
    <Container gap={0}>
      <Spacer y={2} />
      <Col style={{ backgroundColor: '#000', borderRadius: '20px' }}>
        <Spacer y={10} />
        <Row justify="center" gap={1}>
          <Text h1 color="white">
            Todo Limpieza
          </Text>
        </Row>
        <Spacer y={3} />
        <Row justify="center">
          <form>
            <Input
              labelPlaceholder="Nombre de Usuario"
              size="xlarge"
              color="primary"
              bordered
              name="nombreUsuario"
            />
            <Spacer y={4} />
            <Input
              labelPlaceholder="Contraseña"
              size="xlarge"
              color="primary"
              bordered
              type="password"
              name="password"
            />
            <Spacer y={4} />
            <Button size="large" color="success" type="submit">
              Ingresar
            </Button>
          </form>
        </Row>
        <Spacer y={10} />
      </Col>
    </Container>
  );
};
