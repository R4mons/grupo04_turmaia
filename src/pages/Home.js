import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="mt-5">
      <Card className="border-0 bg-light">
        <Card.Body className="p-4">
          <Card.Title className="mb-3">Home</Card.Title>
          <p className="text-muted">Bem-vindo à página inicial do sistema.</p>
        </Card.Body>
      </Card>
    </Container>
  );
}
