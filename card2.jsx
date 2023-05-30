import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1044250932692647976/1112715580248686707/download_1.jpg" />
      <Card.Body>
        <Card.Title>Chapeu de Palha</Card.Title>
        <Card.Text>
         Quase um combo com o óculos o chapeu de palha se mostra indispensável para seu look 
        </Card.Text>
        <Button variant="primary">R$50,00</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample2;