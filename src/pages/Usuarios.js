import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

export default function Usuarios() {
  const usuarios = [
    { id: 1, nome: 'Gabriel Soares' },
    { id: 2, nome: 'Isabella Soares' },
    { id: 3, nome: 'Felipe Soares' },
    { id: 4, nome: 'Augusto Rocha' },
    { id: 5, nome: 'Ramon Saiol' },
  ];

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Gerenciamento de Usuários</h2>
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <Table responsive hover className="mb-0">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nome}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <p className="text-muted mt-3">Total de usuários cadastrados: {usuarios.length}</p>
    </Container>
  );
}
