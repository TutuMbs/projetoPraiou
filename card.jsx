import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1044250932692647976/1112715426774908958/download.jpg" />
      <Card.Body>
        <Card.Title>Oculos de Sol</Card.Title>
        <Card.Text>
         Bonito e estiloso oculos se fazem necessários em dias ensolarados pra curir uma praia
        </Card.Text>
        <Button variant="primary">R$150,00</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;