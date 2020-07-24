import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la S</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Se escribe con S la palabra <i>hubiese</i>, auxiliar del verbo
                  haber, pretérito pluscuamperfecto, modo subjuntivo.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: hubiese amado.
                </li>
                <li className="mt-3">
                  Se escriben con S las terminaciones <i>esta</i>, <i>esto</i>,{' '}
                  <i>ista</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: femini<b>s</b>ta,
                  violini<b>s</b>ta, tie<b>s</b>to, fie<b>s</b>ta arti<b>s</b>
                  ta.
                </li>
                <li className="mt-3">
                  Se escribe con S la terminación <i>se</i> de todos los verbos
                  del pretérito imperfecto, del modo subjuntivo.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: partie<b>s</b>e,
                  ama<b>s</b>e, cumplie<b>s</b>e, subie<b>s</b>e, temie<b>s</b>
                  e.
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
