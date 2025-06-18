import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login(props) {
    const [form, setForm] = useState({ login: "", senha: "", cep: "" });
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add("login-body");
        return () => {
            document.body.classList.remove("login-body");
        };
    }, []);

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        if (form.login === "marcos" && form.senha === "123") {
            alert("Logado com sucesso!");
            localStorage.setItem('auth', 'true');
            navigate('/main');
        } else {
            alert("Usuário e senha inválidos!");
        }
    };

    if (props.menu === "0") {
        return <h1 className="no-access">Sem acesso a essa página...</h1>;
    }

    return (
        <div className="login-container">
            <img
                src="https://fontmeme.com/permalink/250618/d61116648cdb5185b6ff1c1a712083fa.png"
                alt="Safari Pokémon Login"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    marginBottom: '20px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            />


            <Form className="login-form" onSubmit={handleSubmitForm}>
                <Form.Group className="form-group">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        onChange={handleChangeForm}
                        value={form.login}
                        type="text"
                        placeholder="Digite seu login"
                        name="login"
                    />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        onChange={handleChangeForm}
                        value={form.senha}
                        type="password"
                        placeholder="Digite sua senha"
                        name="senha"
                    />
                </Form.Group>

                <Button variant="danger" type="submit" className="login-button">
                    Entrar no Safari Pokémon
                </Button>
            </Form>
        </div>
    );
}

export default Login;
