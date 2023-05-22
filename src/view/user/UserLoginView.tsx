import React, {useState, useEffect} from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



import logInWithEmailAndPassword from "../../user/login";
import  { useUserContext }  from "../../context/UserContext";

const LoginFormView = () => {

  const { user,setUser} = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  useEffect(() => {     
     if(user) window.location.replace('/');    
    }, user);

  const onSubmit = async (e) => {   
    e.preventDefault();    
     await logInWithEmailAndPassword(email,password)
                      .then((resultado) => {
                        console.log(resultado.data.access_token)
                        setUser(resultado.data.access_token);
                              
                      })
                      .catch((error) => {                          
                          const errorMessage = error.message;
                          console.log(errorMessage, error, "Erro al loguear");         
                      }); 

  }

  return (
  <div>
  <Container>
    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>
        <div className="border border-3 border-primary"></div>
        <Card className="shadow">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-uppercase ">BCCR</h2>
              <p className=" mb-5">Por favor ingrese con sus credenciales</p>
              <div className="mb-3">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                    Correo Electornico
                    </Form.Label>
                    <Form.Control type="email" placeholder="Correo Electornico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                    required                  
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required  />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  >
                    <p className="small">
                      <a className="text-primary" href="#!">
                        Quiere recuperar su contraseña?
                      </a>
                    </p>
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit"
                    onClick={onSubmit}   
                    >
                      Ingresar
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Quiere crear una cuenta?{" "}
                    <a href="{''}" className="text-primary fw-bold">
                      Registrese Aquí
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
)};

export default LoginFormView;