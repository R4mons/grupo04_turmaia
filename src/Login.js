import React, { useState, useEffect } from "react";
import { Button, Form, Container, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({ usuario: "", senha: "" });
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('auth') === 'true') {
            navigate('/main');
        }
    }, [navigate]);

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setErro("");
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        if (form.usuario === "admin" && form.senha === "123") {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('user', form.usuario);

            navigate('/main');
        } else {
            setErro("Usuário ou senha inválidos.");
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-secondary bg-opacity-10">
            <Container className="d-flex justify-content-center">
                <Card style={{ width: '25rem' }} className="border-0 rounded-4">
                    <Card.Body className="p-5">
                        <div className="text-center mb-4">
                            <h3 className="fw-bold text-primary">Acesso ao Sistema</h3>
                            <p className="text-muted small">Faça login para continuar</p>
                        </div>

                        {erro && <Alert variant="danger" className="text-center">{erro}</Alert>}

                        <Form onSubmit={handleSubmitForm}>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Usuário</Form.Label>
                                <Form.Control
                                    onChange={handleChangeForm}
                                    value={form.usuario}
                                    name="usuario"
                                    type="text"
                                    placeholder="Digite seu usuário"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="fw-semibold">Senha</Form.Label>
                                <Form.Control
                                    onChange={handleChangeForm}
                                    value={form.senha}
                                    name="senha"
                                    type="password"
                                    placeholder="Digite sua senha"
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 fw-bold" size="lg">
                                Entrar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Login;