import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, Alert, Spinner } from "react-bootstrap";

function Ddd() {
    const [form, setForm] = useState({ ddd: "" });
    const [loading, setLoading] = useState(false);
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState("");

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setErro("");
        setResultado(null);
    };

    const consultarDdd = async () => {
        setErro("");
        setResultado(null);

        const dddNum = form.ddd.replace(/\D/g, "");

        if (dddNum.length !== 2) {
            setErro("O DDD deve conter exatamente 2 dígitos. Ex: 24, 14, 32");
            return;
        }

        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const response = await axios.get(
                `https://brasilapi.com.br/api/ddd/v1/${dddNum}`
            );
            setResultado(response.data);
        } catch (error) {
            setErro(
                error.response?.data?.message || "Erro ao consultar o DDD."
            );
        } finally {
            setLoading(false);
        }
    };

    const submit = (event) => {
        event.preventDefault();
        consultarDdd();
    };

    return (
        <>
            <Card className="mt-4" style={{ width: 600, margin: "0 auto" }}>
                <Card.Body>
                    <Card.Title>Consulta de DDD</Card.Title>
                    <p className="text-muted">
                        Informe um código DDD com 2 dígitos para buscar o estado e as cidades associadas.
                    </p>

                    {erro && <Alert variant="danger">{erro}</Alert>}

                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Código DDD</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ex: 11, 21, 31, 32"
                                name="ddd"
                                value={form.ddd}
                                onChange={handleChangeForm}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={consultarDdd}
                            disabled={loading}
                            className="w-100"
                        >
                            {loading ? (
                                <>
                                    <Spinner size="sm" className="me-2" />
                                    Consultando...
                                </>
                            ) : (
                                "Consultar"
                            )}
                        </Button>
                    </Form>

                    {resultado && (
                        <div className="mt-4">
                            <h5>Resultado da Consulta:</h5>

                            <div className="mb-3 p-3 bg-light rounded">
                                <div className="mb-2">
                                    <strong>Estado: </strong>
                                    <span className="badge bg-primary fs-6">{resultado.state}</span>
                                </div>
                            </div>

                            <div>
                                <strong>Cidades ({resultado.cities?.length || 0}):</strong>
                                <div
                                    className="mt-2"
                                    style={{
                                        maxHeight: "400px",
                                        overflow: "auto",
                                    }}
                                >
                                    <ol className="list-group list-group-numbered">
                                        {resultado.cities?.map((cidade, index) => (
                                            <li key={index} className="list-group-item">
                                                {cidade}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </>
    );
}

export default Ddd;
