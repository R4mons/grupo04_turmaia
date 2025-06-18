import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import emailjs from "@emailjs/browser";
import './sobre.css';

const Sobre = () => {
    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.nome || !form.email || !form.mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        const templateParams = {
            title: "Contato pelo site",
            name: form.nome,
            message: form.mensagem,
            reply_to: form.email,
        };

        emailjs.send('service_7oholtc', 'template_nn00n06', templateParams, 'RDjqAKcYwHX1J5PtN')
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                setForm({ nome: '', email: '', mensagem: '' });
            })
            .catch(() => {
                alert("Erro ao enviar mensagem.");
            });
    };

    return (
        <div className="sobre-wrapper">
          <div className="sobre-content">
            <img
              src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065_f2.png"
              alt="Mega Alakazam"
              className="img-alakazam"
            />

            <Card className="p-4 shadow mb-4 card-sobre">
              <Card.Title>Sobre o Projeto</Card.Title>
              <Card.Text>
                Para esse projeto nós, Arthur e Bernardo, pensamos em fazer um site de Pokémon. Visamos uma estética verde para remeter às árvores e à temática de "Jungle" ou Safari, que está sempre muito presente nos jogos da série. Tentamos fazer uma versão bem simplificada e leve de uma Pokédex, com a opção de identificar os Pokémons por região e lugar onde habitam, permitindo uma experiência imersiva para quem está acessando, e sempre tentando manter o usuário interessado no tema.
              </Card.Text>
            </Card>

            <Card className="p-4 shadow card-contato">
              <Card.Title>Contate-nos</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={form.nome}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="mensagem"
                    placeholder="Digite sua mensagem"
                    rows={3}
                    value={form.mensagem}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Enviar Mensagem
                </Button>
              </Form>
            </Card>
          </div>
        </div>
    );
};

export default Sobre;
