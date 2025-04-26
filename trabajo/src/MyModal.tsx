import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const MyModal: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const openShow = () => {
    setShow(true);
  };

  const offShow = () => {
    setShow(false);
  };

  const manejarEnvio = () => {
    alert("El formulario se ha enviado con éxito");
    setShow(false);
  };

  return (
    <div>
      <Button variant="success" onClick={openShow}>
        Abrir modal
      </Button>
      <Modal show={show} onHide={offShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal ejercicio</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h3>Formulario</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aqui" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={offShow}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={manejarEnvio}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
