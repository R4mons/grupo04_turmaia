import React, { useState, useEffect } from 'react';
import { Container, Card, Spinner } from 'react-bootstrap';

export default function Sobre() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        versao: "1.0.0",
        descricao: "Sistema em React com autenticação simples, roteamento entre páginas e consumo de APIs externas (DDD e IBGE).",
        autores: "Gabriel Soares, Augusto Rocha, Isabella Soares, Felipe Soares e Ramon Saiol",
        grupo: "G4"
      });
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="mb-4">Sobre a Aplicação</Card.Title>
          {loading ? (
            <div className="d-flex align-items-center gap-3">
              <Spinner animation="border" variant="primary" size="sm" />
              <span className="text-muted">Carregando informações do sistema usando useEffect...</span>
            </div>
          ) : (
            <div>
              <p><strong>Descrição:</strong> {data.descricao}</p>
              <p><strong>Versão:</strong> {data.versao}</p>
              <p><strong>Autores:</strong> {data.autores}</p>
              <p><strong>Grupo:</strong> {data.grupo}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
