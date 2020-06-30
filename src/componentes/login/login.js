import React from 'react';
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

import {NAMEHOST as host} from '../../parametros.json';
import './login.css';
import { Cookies } from 'react-cookie';
import { expiredSession} from '../helpers/helpers';


const cookies = new Cookies();


export default class Login extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = { usuario:"", contrasenia:"" }
    }

    iniciarSesion(){
        axios.post(`${host}/usuario/login`, {
            user:this.state.usuario,
            pass:this.state.contrasenia
        }).then(response => {
            if(response.data.token===null){
                console.log("usuario inválido");
                alert("usuario inválido");
            }
            else{
                //const { cookies } = this.props;
                cookies.set('token', response.data.token, 
                    { path: '/', 
                    expires:expiredSession()
                });

                //console.log("usuario válido");
                //alert("usuario válido");
                this.props.history.push("/home");
            }
        }).catch(error => {
            console.error(error);
        });
        //alert(this.state.usuario+"   "+this.state.contrasenia);
    }

    render() { 
        return (
            <Container id="loginContainer">
                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar Sesión</h2>
                        </Row>
                        <Row>
                            <Col
                            sm="12"
                            xs="12"
                            md={{span:4,offset:4}}
                            lg={{span:4,offset:4}}
                            xl={{span:4,offset:4}}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control placeholder="Ingrese el usuario" onChange={ e => 
                                            this.setState({usuario:e.target.value})}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña" onChange={ e => 
                                            this.setState({contrasenia:e.target.value})}/>
                                    </Form.Group>
                                    <Button variant="primary" style={{width:"100%"}}
                                    onClick={()=>this.iniciarSesion()}>
                                        Ingresar
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
          );
    }
}
 
