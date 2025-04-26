import { Col, Container, Row, Card, Button } from "react-bootstrap";

const MyContainer: React.FC = () => {
  return (
    <Container fluid="sm" className="d-flex justify-content-center mt-5 align-items-center">
      <Row className="g-1">
        <Col md={12} className="text-white text-center p-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1564634092-50a5643c12e7" />
            <Card.Body>
              <Card.Title>La Plaza de Nariño</Card.Title>
              <Card.Text>
                La Plaza de Nariño es un lugar histórico y cultural en Pasto, rodeado de arquitectura colonial
                y una gran vista a la ciudad. Es un punto de encuentro clave para locales y turistas.
              </Card.Text>
              <Button variant="primary">Descubre más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-1">
        <Col md={12} className="text-white text-center p-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1573194826741-fbb2f5ab8819" />
            <Card.Body>
              <Card.Title>El Volcán Galeras</Card.Title>
              <Card.Text>
                El Volcán Galeras es uno de los íconos naturales de Pasto, ofreciendo vistas impresionantes
                y aventuras al aire libre. Es un lugar ideal para los amantes de la naturaleza y la aventura.
              </Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-1">
        <Col md={12} className="text-white text-center p-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1580360166165-9f4b7cd81f76" />
            <Card.Body>
              <Card.Title>La Feria de Pasto</Card.Title>
              <Card.Text>
                La Feria de Pasto es uno de los eventos más importantes de la región, celebrando la cultura,
                la música y las tradiciones locales. Es una fiesta llena de alegría y color.
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
