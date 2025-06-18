import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";   

function Email() {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: ""})

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        
    }

    const enviarEmail = (event) => {
        if (form.email === "" || form.mensagem === "" || form.nome === "") {
            alert("Informe todos os campos");
            event.preventDefault();
            return;
        }
      
        const templateParams = {
            title: "Email enviado pelo sistema",
            name: form.nome,
            message: form.mensagem,
            reply_to: form.email,
            to_name: "Marcos",
        };
        // Chama a API do emailjs       

        emailjs.send('service_mxwk0ox', 'template_k4wx6cd', templateParams, 'W--o0MxM5bSMRpkJ8') 
            .then((response) => {
                console.log('Email enviado com sucesso!', response.status, response.text);
                alert("Email enviado com sucesso!");
            }, (error) => {
                console.log('Erro ao enviar email:', error);
                alert("Erro ao enviar email");
            });

        
            ;

    };


    return (
        <>
            <Card className="mt-4" style={{ width: 400 }}>
                <Card.Body>
                    <Card.Title>Envio de Email</Card.Title>
                    <Form onSubmit={enviarEmail}>
                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o nome"
                                name="nome"
                                value={form.nome}
                                onInput={handleChangeForm}
                            />
                        </Form.Group>
                   
                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o email"
                                name="email"
                                value={form.email}
                                onInput={handleChangeForm}
                            />
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control 
                                as="textarea"
                                placeholder="Informe a mensagem"
                                name="mensagem"
                                value={form.mensagem}
                                onInput={handleChangeForm}
                            />
                        </Form.Group>


                        <Button
                               variant="success"
                               size="lg"
                               className="w-100"
                               type="submit"
                            >
                                Enviar
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Email;