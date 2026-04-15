import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function Configuracoes() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Configurações</h2>
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3">Informações do Sistema</Card.Title>
          <p><strong>Versão:</strong> 1.0.0</p>
          <p><strong>Ambiente:</strong> Desenvolvimento</p>
          <p><strong>Framework:</strong> React 19</p>
          <p><strong>Último acesso:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
        </Card.Body>
      </Card>
    </Container>
  );
}
