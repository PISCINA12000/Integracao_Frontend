import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function CadastroUsuario(props) {
    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Junte-se a nós realizando o seu cadastro!</p>
                                <Form>

                                    <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                        <Form.Label className="text-center">CPF</Form.Label>
                                        <Form.Control type="text" placeholder="Digite o seu nome" />
                                    </Form.Group>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                            <Form.Label className="text-center">Nome Completo</Form.Label>
                                            <Form.Control type="text" placeholder="Digite o seu nome" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label>Telefone</Form.Label>
                                            <Form.Control type="number" placeholder="Digite o seu telefone" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formUsername">
                                            <Form.Label className="text-center">Endereço de e-mail</Form.Label>
                                            <Form.Control type="email" placeholder="Digite o seu e-mail" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Senha</Form.Label>
                                            <Form.Control type="password" placeholder="Senha" />
                                        </Form.Group>
                                    </Row>
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                            Cadastrar-se
                                        </Button>
                                    </div>
                                </Form>
                                <div className="mt-3">
                                    <p className="mb-0 text-center">
                                        Já possui uma conta?{' '}
                                        <a href="{''}" className="text-primary fw-bold">Faça Login</a>
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}