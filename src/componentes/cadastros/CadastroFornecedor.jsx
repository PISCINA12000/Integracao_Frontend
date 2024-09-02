import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function CadastroFornecedor(props) {
    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Cadastro de Fornecedores</p>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                            <Form.Label className="text-center">Razão Social</Form.Label>
                                            <Form.Control type="text" placeholder="Digite a Razão Social" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                            <Form.Label className="text-center">CNPJ</Form.Label>
                                            <Form.Control type="text" placeholder="Digite o CNJP" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                            <Form.Label className="text-center">Nome Fantasia</Form.Label>
                                            <Form.Control type="text" placeholder="Digite o nome Fantasia" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label>Telefone</Form.Label>
                                            <Form.Control type="text" placeholder="Digite o telefone" />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group as={Col} className="mb-3" controlId="formUsername">
                                        <Form.Label className="text-center">Endereço de e-mail</Form.Label>
                                        <Form.Control type="email" placeholder="Digite o e-mail" />
                                    </Form.Group>
                                    <h2>Endereço</h2>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formUsername">
                                            <Form.Label className="text-center">Rua</Form.Label>
                                            <Form.Control type="text" placeholder="Informe a Rua" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Nº</Form.Label>
                                            <Form.Control type="text" placeholder="Número" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formUsername">
                                            <Form.Label className="text-center">Cidade</Form.Label>
                                            <Form.Control type="text" placeholder="Cidade" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>CEP</Form.Label>
                                            <Form.Control type="text" placeholder="CEP" />
                                        </Form.Group>
                                    </Row>
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                            Cadastrar
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}