import { Col, Container, Row, Card, Button } from "react-bootstrap";

const MyContainer: React.FC = () => {
  return (
    <Container fluid="sm" className="d-flex justify-content-center mt-5 align-items-center">
      <Row className="g-1">
        <Col md={12} className="text-white text-center p-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-150https://https://media.istockphoto.com/id/1280337869/es/foto/la-gran-barrera-de-coral.jpg?s=612x612&w=0&k=20&c=ifZXCpqq357WSImzA5IzcSfsUbUEhLPlV8iQbGT8o-U=elasombrario.publico.es/wp-content/uploads/sites/1/2023/12/Peces-y-corales-GRAN-BARRERA-CORAL-Shutterstock-Debra-James-WWF-WW1337.jpg6748686212-6ehttps://static.dw.com/image/62744281_605.jpg4bhttps://static.dw.com/image/55274940_605.jpg7d566d1b" />
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
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1032655858/es/foto/puente-golden-gate.jpg?s=612x612&w=0&k=20&c=1i3kYQ81iCVE4HX2_W4CgPeLuEeHXjB68yl6wnjm-Mo=" />
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
