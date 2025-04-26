import { Col, Container, Row, Card, Button } from "react-bootstrap";

const MyContainer: React.FC = () => {
  return (
    <Container fluid="sm" className="d-flex justify-content-center mt-5 align-items-center">
      <Row className="g-1">
        <Col md={12} className="text-white text-center p-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1506748686212-6e4b7d566d1b" />
            <Card.Body>
              <Card.Title>Gran Barrera de Coral</Card.Title>
              <Card.Text>
                La Gran Barrera de Coral en Australia es uno de los ecosistemas marinos más impresionantes del mundo,
                hogar de una diversidad increíble de especies marinas.
              </Card.Text>
              <Button variant="primary">Descubre más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-1">
        <Col md={12} className="text-white text-center p-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68" />
            <Card.Body>
              <Card.Title>El avance tecnológico</Card.Title>
              <Card.Text>
                La tecnología avanza a pasos agigantados, revolucionando la forma en que interactuamos, trabajamos y vivimos.
                ¿Qué depara el futuro?
              </Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-1">
        <Col md={12} className="text-white text-center p-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1461749280684-b6b276be9cb7" />
            <Card.Body>
              <Card.Title>Ponte Golden Gate</Card.Title>
              <Card.Text>
                Un ícono mundial, el puente Golden Gate en San Francisco no solo es una maravilla de la ingeniería,
                sino también un símbolo de innovación y belleza.
              </Card.Text>
              <Button variant="primary">Explorar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyContainer;
