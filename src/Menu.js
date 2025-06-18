import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logox from './logo.svg';
import { useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { CgPokemon } from "react-icons/cg";
import emailjs from "@emailjs/browser";

const Menu = ({ children }) => {
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);
    const [isHoveringBrand, setIsHoveringBrand] = useState(false);

    const enviarEmailAba = async (nomeDaAba) => {
        const templateParams = {
            title: "Navegação detectada",
            name: "Sistema de Navegação",
            message: `Usuário clicou na aba: ${nomeDaAba}`,
            reply_to: "arthur.bm222@gmail.com",
          /*  to_email: "arthur.bm222@gmail.com", */ 
        };

        try {
            const response = await emailjs.send(
                'service_7oholtc',
                'template_ithi5yl',
                templateParams,
                'RDjqAKcYwHX1J5PtN'
            );
            console.log(`Email enviado para ${nomeDaAba}:`, response.status, response.text);
        } catch (error) {
            console.error('Erro ao enviar email:', error);
        }
    };

    const handleClickAba = async (rota, nome) => {
        await enviarEmailAba(nome);
        navigate(rota);
    };

    const handleLogout = () => {
        localStorage.removeItem('auth');
        alert("Logout realizado com sucesso!");
        navigate('/');
    };

    return (
        <PrivateRoute>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand
                            onClick={() => handleClickAba("/main", "Main")}
                            onMouseEnter={() => setIsHoveringBrand(true)}
                            onMouseLeave={() => setIsHoveringBrand(false)}
                            style={{
                                cursor: 'pointer',
                                color: isHoveringBrand ? 'black' : 'black',
                                textDecoration: isHoveringBrand ? 'underline' : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <img className="App-logo" src={logox} width={60} alt="logo" />
                            Safari Pokemon
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => handleClickAba("/pokedex", "Pokedex")}>
                                    Pokedex
                                </Nav.Link>
                                <Nav.Link onClick={() => handleClickAba("/habitat", "Habitat")}>
                                    Habitat
                                </Nav.Link>
                                <Nav.Link onClick={() => handleClickAba("/sobre", "Sobre")}>
                                    Sobre
                                </Nav.Link>

                                <Nav.Link
                                    onClick={handleLogout}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: isHovering ? 'red' : 'darkred',
                                        textDecoration: isHovering ? 'underline' : 'none',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <CgPokemon size={24} style={{ marginRight: '5px' }} />
                                    Logout
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div style={{ flex: 1 }}>
                    {children}
                </div>

                <footer className="bg-light text-center text-lg-start">
                    <div className="text-center p-3" style={{ backgroundColor: "white" }}>
                        © 2025:
                        <a className="text-dark" href="https://uniacademia.edu.br" target="_blank" rel="noreferrer">Desenvolvimento Front End</a>
                    </div>
                </footer>
            </div>
        </PrivateRoute>
    );
};

export default Menu;