import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'
import actividad1 from '../../assets/img/usoS/actividad3.png'

import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class Actividad3View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(state) {
    super(state)
    this.state = {
      palabra1: '',
      palabra2: '',
      palabra3: '',
      palabra4: '',
      palabra5: '',
      palabra6: '',
      palabra7: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.actividad3(this.state)
      alert('Se guardo la actividad' + respuesta[0].id)
    } catch (err) {
      console.log('loggea si hay un error')
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación 3: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>3.-  Completa con S, C o Z las palabras siguientes:</p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                    <img
                      src={actividad1}
                      style={{ width: 260 }}
                      alt="actividad1 "
                      className="img-fluid animated  bounceInRight delay-1s"
                    />
                    <Col xs="12" sm="9" md="5">
                      <Form>
                        <div
                          className="cajaA2"
                          style={{ backgroundColor: '#d5d4d8' }}
                        >
                          <div className="centrado-fila">
                          Trope
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra1"
                                id="palabra1"
                                value={this.state.palabra1}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ar
                          </div>

                          <div className="centrado-fila">
                          A
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra2"
                                id="palabra2"
                                value={this.state.palabra2}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            eituna
                          </div>
                          <div className="centrado-fila">
                            
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra3a"
                                id="palabra3a"
                                value={this.state.palabra3a}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            apato
                           
                          </div>
                          <div className="centrado-fila">
                          Dici
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra4"
                                id="palabra4"
                                value={this.state.palabra4}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ión
                          </div>
                          <div className="centrado-fila">
                          Ac
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra5a"
                                id="palabra5a"
                                value={this.state.palabra5a}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ion
                            
                          </div>
                          <div className="centrado-fila">
                          Paya
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra6"
                                id="palabra6"
                                value={this.state.palabra6}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            o
                          </div>
                          <div className="centrado-fila">
                          Ilu
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra7"
                                id="palabra7"
                                value={this.state.palabra7}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ión
                          </div>
                         
                        </div>
                        <div className="centrado-fila mt-3">
                          <Button
                            color="primary"
                            onClick={this.onSave.bind(this)}
                          >
                            Enviar
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <p>{JSON.stringify(this.state)}</p> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad3View
