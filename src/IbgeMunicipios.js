import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, Alert, Spinner, Table } from "react-bootstrap";
import { FadeLoader } from "react-spinners";

function IbgeMunicipios() {
    const [form, setForm] = useState({ siglaUF: "" });
    const [loading, setLoading] = useState(false);
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState("");

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value.toUpperCase() });
        setErro("");
        setResultado(null);
    };

    const consultarMunicipios = async () => {
        setErro("");
        setResultado(null);

        const sigla = form.siglaUF.trim().toUpperCase();

        if (sigla.length !== 2) {
            setErro("A sigla do estado deve conter exatamente 2 letras. Ex: SP, RJ, MG");
            return;
        }

        if (!/^[A-Z]{2}$/.test(sigla)) {
            setErro("A sigla deve conter apenas letras. Ex: SP, RJ, MG");
            return;
        }

        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const response = await axios.get(
                `https://brasilapi.com.br/api/ibge/municipios/v1/${sigla}`
            );
            setResultado(response.data);
        } catch (error) {
            setErro(
                error.response?.data?.message || "Erro ao consultar os municípios. Verifique a sigla informada ou sua conexão."
            );
        } finally {
            setLoading(false);
        }
    };

    const submit = (event) => {
        event.preventDefault();
        consultarMunicipios();
    };

    return (
        <>
            <Card className="mt-4" style={{ width: 600, margin: "0 auto" }}>
                <Card.Body>
                    <Card.Title>Consulta de Municípios - IBGE</Card.Title>
                    <p className="text-muted">
                        Informe a sigla de um estado (UF) para listar todos os seus municípios.
                    </p>

                    {erro && <Alert variant="danger">{erro}</Alert>}

                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Sigla do Estado (UF)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ex: SP, RJ, MG, BA"
                                name="siglaUF"
                                value={form.siglaUF}
                                onChange={handleChangeForm}
                                maxLength={2}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={consultarMunicipios}
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

                    {loading && (
                        <div className="d-flex align-items-center flex-column justify-content-center text-center py-4">
                            <FadeLoader
                                color="#0d6efd"
                                height={15}
                                loading
                                margin={2}
                                radius={2}
                                speedMultiplier={1}
                                width={5}
                            />
                            <div className="text-muted pt-3">Carregando municípios...</div>
                        </div>
                    )}

                    {resultado && (
                        <div className="mt-4">
                            <h5>Resultado da Consulta:</h5>

                            <div className="mb-3 p-3 bg-light rounded">
                                <div className="mb-2">
                                    <strong>Total de Municípios: </strong>
                                    <span className="badge bg-primary fs-6">{resultado.length}</span>
                                </div>
                            </div>

                            <div
                                style={{
                                    maxHeight: "400px",
                                    overflow: "auto",
                                }}
                            >
                                <Table striped bordered hover size="sm">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>#</th>
                                            <th>Nome</th>
                                            <th>Código IBGE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {resultado.map((municipio, index) => (
                                            <tr key={municipio.codigo_ibge}>
                                                <td>{index + 1}</td>
                                                <td>{municipio.nome}</td>
                                                <td>{municipio.codigo_ibge}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </>
    );
}

export default IbgeMunicipios;

