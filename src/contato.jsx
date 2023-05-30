import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
function Contato() {
    return (
        <div className='contatos'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Coloque seu E-mail:</Form.Label>
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>
          <Form.Group>
          <Form.Label>Coloque seu telefone:</Form.Label>
          <Form.Control type="text" placeholder="Número" />
          <br/>
          </Form.Group>
          <Button variant="success" type="submit">
            Confirmar
          </Button>
        </Form>
        </div>
      );
}

export default Contato;