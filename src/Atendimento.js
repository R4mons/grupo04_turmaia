import React, { useState } from "react";
import { Button, Card, Form, Alert, Spinner, Container } from "react-bootstrap";
import emailjs from '@emailjs/browser';

function Atendimento() {
    const [form, setForm] = useState({ nome: "", email: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setStatus({ type: "", message: "" });
    };

    const enviarEmail = (event) => {
        event.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });

        const templateParams = {
            nome: form.nome,
            email: form.email,
        };

        emailjs.send(
            'service_k9hpezl',
            'template_oy2gegn',
            templateParams,
            'rnMNEr4qHjDRHEM4S'
        ).then((response) => {
            setStatus({ type: "success", message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve." });
            setForm({ nome: "", email: "" });
        }).catch((err) => {
            console.error("Erro EmailJS:", err);
            setStatus({ type: "danger", message: "Ocorreu um erro ao enviar sua mensagem. Verifique suas credenciais." });
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Card style={{ width: '40rem' }} className="shadow-sm">
                <Card.Body>
                    <Card.Title className="fw-bold text-primary mb-3">Enviar email</Card.Title>
                    <p className="text-muted">
                        Preencha o formulário abaixo.
                    </p>

                    {status.message && <Alert variant={status.type}>{status.message}</Alert>}

                    <Form onSubmit={enviarEmail}>
                        <Form.Group className="mb-3">
                            <Form.Label>Seu Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu nome completo"
                                name="nome"
                                value={form.nome}
                                onChange={handleChangeForm}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Seu E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="exemplo@email.com"
                                name="email"
                                value={form.email}
                                onChange={handleChangeForm}
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={loading}
                            className="w-100 fw-bold"
                        >
                            {loading ? (
                                <>
                                    <Spinner size="sm" className="me-2" />
                                    Enviando...
                                </>
                            ) : (
                                "Quero conhecer mais sobre esse Grupo, me mande um email"
                            )}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Atendimento;
