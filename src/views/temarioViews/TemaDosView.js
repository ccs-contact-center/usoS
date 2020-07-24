import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la S</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Se escriben con S las palabras terminadas en los superlativos 
                  <i>ísimo</i>, <i>ísima</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: bellí<b>s</b>ima,
                  lindí<b>s</b>imo, feí<b>s</b>ima, inteligentí<b>s</b>ima,
                  delicadí<b>s</b>imo.
                </li>
                <li className="mt-3">
                  Se escriben con S las palabras terminadas en <i>oso</i>,{' '}
                  <i>osa</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: Bondado<b>s</b>o,
                  sabro<b>s</b>a, dadivo<b>s</b>o, perezo<b>s</b>a, maravillo
                  <b>s</b>o, grandio<b>s</b>o.
                </li>
                <li className="mt-3">
                  Se escriben con S las palabras terminadas en <i>ismo</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: espiriti<b>s</b>
                  mo, oscuranti<b>s</b>mo, atleti<b>s</b>mo, altrui<b>s</b>mo,
                  vanguardi<b>s</b>mo.
                </li>
                <li className="mt-3">
                  Se escriben con S las palabras terminadas en <i>esca</i>,{' '}
                  <i>esco</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: grote<b>s</b>ca,
                  dante<b>s</b>ca, burle<b>s</b>co, gigante<b>s</b>co, pintore
                  <b>s</b>co.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
