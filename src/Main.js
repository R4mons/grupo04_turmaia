import React from "react";
import { Container } from "react-bootstrap";

const Saudacao = (props) => {
    return (
        <div>
            <h1 className="mb-3">Bem-vindo, {props.usuarioLogado}!</h1>
            <p className="text-muted">Você está logado e acessando a tela Home do sistema.</p>
        </div>
    );
};

function Main() {
    const user = localStorage.getItem('user') || 'Usuário';

    return (
        <Container className="mt-5">
            <Saudacao usuarioLogado={user} />
        </Container>
    );
}

export default Main;