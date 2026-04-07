import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";

const Saudacao = (props) => {
    return (
        <div>
            <h1 className="mb-3">Bem-vindo, {props.usuarioLogado}!</h1>
            <p className="text-muted">Você está logado e acessando a tela Home do sistema.</p>
        </div>
    );
};

const BotoesContador = ({ funcaoDiminuir, funcaoAumentar }) => {
    return (
        <div className="d-flex justify-content-center gap-3">
            <Button variant="danger" size="lg" className="px-4" onClick={funcaoDiminuir}>-</Button>
            <Button variant="success" size="lg" className="px-4" onClick={funcaoAumentar}>+</Button>
        </div>
    );
};

function Main() {
    const [contador, setContador] = useState(0);
    const user = localStorage.getItem('user') || 'Usuário';

    const handleAumentar = () => setContador(contador + 1);
    const handleDiminuir = () => setContador(contador - 1);

    return (
        <Container className="mt-5">
            <Saudacao usuarioLogado={user} />
            
            <Card className="mt-5 border-0 bg-light" style={{ maxWidth: '350px' }}>
                <Card.Body className="text-center p-4">
                    <Card.Title>Contador interativo</Card.Title>
                    <h1 className="display-3 my-4 fw-bold text-primary">{contador}</h1>
                    
                    <BotoesContador 
                        funcaoDiminuir={handleDiminuir} 
                        funcaoAumentar={handleAumentar} 
                    />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Main;