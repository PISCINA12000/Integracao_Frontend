import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function FormCadCategoria(props) {
    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Cadastro de Categoria</p>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                            <Form.Label className="text-center">Código</Form.Label>
                                            <Form.Control type="text" placeholder="Digite o código" />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                                        <Form.Label>Descrição</Form.Label>
                                        <Form.Control type="text" placeholder="Digite a descrição" />
                                    </Form.Group>
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