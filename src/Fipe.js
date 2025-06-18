import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function Fipe() {
    const [form, setForm] = useState({ codigoFipe: "", valor: "", marca: "", modelo: "", anoModelo: "", mesReferencia: "" })

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        
    }

    const submit = (event) => {
       // event.preventDefault();
        alert("Dados Gravados com sucesso");
    }

    const consultarFipe = (event) => {
        if (form.codigoFipe.length < 1) {
            alert("Informe o codigo fipe");
            return;
        }
        // Remove tudo que não for número
        const codigoFipeNum = form.codigoFipe.replace(/\D/g, "");
        if (codigoFipeNum.length < 1) {
            alert("Codigo fipe inválido ++++ ");
            return;
        }
        // Chama a API da tabela Fipe
        axios.get(`https://brasilapi.com.br/api/fipe/preco/v1/${form.codigoFipe}`).then((res) => {
            const { codigoFipe, valor, marca, modelo, anoModelo, mesReferencia} = 
                res.data[res.data.length - 1];
            setForm({ "codigoFipe": codigoFipe, "valor": valor, "marca": marca, "modelo": modelo, "anoModelo": anoModelo, "mesReferencia": mesReferencia })
        }).catch((error) => {
          //  console.log(error);
            alert(error.response.data.message); 
        }
        );
    };


    return (
        <>
            <Card className="mt-4" style={{ width: 400 }}>
                <Card.Body>
                    <Card.Title>Consulta tabela Fipe</Card.Title>
                    <Form onSubmit={submit}>
                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Label>Codigo Fipe</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o Codigo Fipe ex. 038003-2 001556-3"
                                name="codigoFipe"
                                value={form.codigoFipe}
                                onInput={handleChangeForm}
                                onBlur={consultarFipe}
                            />

                            <Button
                                variant="primary"
                                onClick={consultarFipe}
                            >
                                Consultar
                            </Button>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Text className="text-muted">
                                Valor: {form.valor}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Text className="text-muted">
                                Ano modelo: {form.anoModelo}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Text className="text-muted">
                                Marca: {form.marca}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Text className="text-muted">
                                Modelo: {form.modelo}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Text className="text-muted">
                                Mês Referencia: {form.mesReferencia}
                            </Form.Text>
                        </Form.Group>

                        <Button
                               variant="success"
                               size="lg"
                               className="w-100"
                               type="submit"
                            >
                                Gravar
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Fipe;