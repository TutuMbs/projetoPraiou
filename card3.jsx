import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample3() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1044250932692647976/1113078221055991808/chinelo_praia4.png" />
      <Card.Body>
        <Card.Title>Chinelo</Card.Title>
        <Card.Text>
         Queimar o pé na areia quente não rola né? adquira esses estilosos chinelos basico e bem feito como deve ser
        </Card.Text>
        <Button variant="primary">R$30,00</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample3;