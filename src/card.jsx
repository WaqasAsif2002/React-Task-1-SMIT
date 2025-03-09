import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function BasicExample({ title, img, caption }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{caption}</Card.Text>
        <Button onClick={redirect} variant="primary">Go to GS Website</Button>
      </Card.Body>
    </Card>
  );
}
function redirect() {
    window.location.href = 'https://gshock.casio.com/in/'
}
export default BasicExample;
