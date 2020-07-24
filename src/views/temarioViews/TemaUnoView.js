import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la S</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Reglas ortográficas de la S</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  Se escriben con S las palabras que terminan en ense que son
                  referentes a los gentilicios.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: nicaragüen
                  <b>s</b>e, costarricen<b>s</b>e, canadien<b>s</b>e, mexiquen
                  <b>s</b>e.
                </li>
                <li className="mt-3">
                  Se escriben con S las terminaciones <i>sivo</i>, <i>siva</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: corro<b>s</b>ivo,
                  ma<b>s</b>iva, explo<b>s</b>ivo, expre<b>s</b>iva, inten
                  <b>s</b>ivo.
                </li>
                <li className="mt-3">
                  Se escriben con S las palabras terminadas en <i>sión</i>
                   cuando proceden de palabras terminadas en <i>so</i>,{' '}
                  <i>sor</i>, <i>sivo</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>:
                  compren<b>s</b>ión-compren<b>s</b>ivo, persua<b>s</b>ión-persua<b>s</b>ivo,
                  repre<b>s</b>ión-repre<b>s</b>ivo, previ<b>s</b>ión-previ<b>s</b>or, preci<b>s</b>ión-preci<b>s</b>o.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
