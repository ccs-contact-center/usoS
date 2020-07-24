import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la S</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <ul>
                <li>
                  Se escriben con S las palabras que terminan en <i>ersa</i>,{' '}
                  <i>erse</i>, <i>erso</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: atrever<b>s</b>e,
                  adver<b>s</b>a, conver<b>s</b>o, inver<b>s</b>o, embellecer
                  <b>s</b>e, perversa.
                </li>
                <li className="mt-3">
                  Se escriben con S los verbos que en su infinitivo no tienen 
                  <i>s</i>, <i>c</i> ni <i>z</i>. 
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: querer-qui
                  <b>s</b>o, haber-ha<b>s</b>, ver-ve<b>s</b>.
                </li>
              </ul>
              <p>
                ¿Sabrías ya distinguir a partir de ahora las palabras que se
                escriben con S de forma correcta?
              </p>
              <h3 className="text-center">
                <b>REALIZAREMOS UNA ACTIVIDAD</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
