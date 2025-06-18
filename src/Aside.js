import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function Aside() {
    const [form, setForm] = useState({ cep: "", nro: "", logradouro: "", bairro: "", localidade: "", estado: "" })

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const submit = (event) => {
       // event.preventDefault();

        alert("Dados Gravados com sucesso");
    }

    const consultarCep = (event) => {
        // Remove tudo que não for número
        const cepNum = form.cep.replace(/\D/g, "");

        if (cepNum.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cepNum}/json/`).then((res) => {
                if (res.data.erro && res.data.erro === "true") {
                    alert("Cep não encontrado");
                } else {
                    const { logradouro, bairro, localidade, estado } = res.data;
                    setForm({ "logradouro": logradouro, "bairro": bairro, "localidade": localidade, "estado": estado })

                    alert("Achei seu cep");
                }
            });
        } else {
            alert("Cep inválido");
        }
    };


    return (
        <>
            <Card className="mt-4" style={{ width: 400 }}>
                <Card.Body>
                    <Card.Title>Consulta serviço de CEP</Card.Title>
                    <Form onSubmit={submit}>
                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o CEP"
                                name="cep"
                                value={form.cep}
                                onChange={handleChangeForm}
                            />

                            <Button
                                variant="primary"
                                onClick={consultarCep}
                            >
                                Consultar
                            </Button>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Text className="text-muted">
                                Logradouro: {form.logradouro}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="d-flex align-items-center mb-3" style={{gap: 5}}>
                            <Form.Label>Nro</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o nro"
                                name="nro"
                                value={form.nro}
                                onChange={handleChangeForm}
                            />
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Text className="text-muted">
                                Bairro: {form.bairro}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Text className="text-muted">
                                Localidade: {form.localidade}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup" >
                            <Form.Text className="text-muted">
                                Estado: {form.estado}
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

export default Aside;