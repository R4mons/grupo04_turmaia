import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login(props) {

    const [form, setForm] = useState({ login: "", senha: "", cep: "" })
    const navigate = useNavigate();

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        // Descontroi o objeto anterior ... tudo da variavel e colocar na variavel nova 
        // [..name] substitui a variavel vinda no parametro pelo valor atual dela
    }

    const hanldeSubmitForm = (event) => {
        event.preventDefault() // Não dispara a funcao padrao do form

        if (form.login === "marcos" && form.senha === "123") {
            alert("Logado com sucesso!")
            
            localStorage.setItem('auth', 'true'); // Grava no localStorage o valor de auth
            
            navigate('/email'); // Redireciona para a página de email

        } else {
            alert("Usuario e senha invalidos!")
        }
    }

    /* 
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')


    const handleChangePass = (event) => {
        setPassword(event.target.value)
    }
    const handleChange = (event) => {
        setNome(event.target.value)
    }

    const handleClick = () => {
        alert("Registro gravado com sucesso!")
    }

    <label>Nome: </label>
                <input type="text" id="idNome" name="nome"
                    onChange={handleChange}
                    value={nome}
                />

                <label>Senha: </label>
                <input type="password" id="idPassword" name="password"
                    onChange={handleChangePass}
                    value={password}
                />
                <br />
                <button onClick={handleClick}> Gravar </button>
    
                */

    if (props.menu === "0") {
        return (
            <h1> Sem acesso a essa pagina.... </h1>
        )
    } else {
        return (
            <>
                <h1>  Formulario de Login  </h1>

                <Form className="w-50" onSubmit={hanldeSubmitForm}>
                    <Form.Group className="meuPadraoFormGroup">
                        <Form.Label>Login</Form.Label>
                        <Form.Control onChange={handleChangeForm} value={form.login} type="text" placeholder="Entre com login" name="login" />
                        <Form.Text className="text-muted">
                            Digite seu login...
                        </Form.Text>

                    </Form.Group>

                    <Form.Group className="meuPadraoFormGroup">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control onChange={handleChangeForm} value={form.senha} type="password" placeholder="Senha" name="senha" />
                 
                        <Button variant="primary" type="submit">
                            Logar
                        </Button>

                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Login: {form.login}</Form.Label>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label> Senha: {form.senha}</Form.Label>
                    </Form.Group>
                
                </Form>
            </>
        );
    }
}

export default Login;