import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Pagina404() {
    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-secondary bg-opacity-10">
            <Container className="d-flex justify-content-center">
                <Card style={{ width: '30rem' }} className="border-0 rounded-4 shadow-sm">
                    <Card.Body className="p-5 text-center">
                        <h1 className="fw-bold text-danger display-4">404</h1>
                        <h3 className="fw-bold text-dark mt-3">Página não encontrada</h3>
                        <p className="text-muted mt-3 mb-4">
                            A rota que você tentou acessar não existe ou foi movida.
                        </p>

                        <Button
                            variant="primary"
                            className="w-100 fw-bold"
                            size="lg"
                            onClick={() => navigate('/main')}
                        >
                            Voltar para o Início
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Pagina404;
