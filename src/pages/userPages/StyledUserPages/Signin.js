import React, { useState } from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppRowContainer from '@crema/core/AppRowContainer';
import { Button, Card, Col, Form, Row, Container, FloatingLabel } from 'react-bootstrap';
import AppScrollbar from '@crema/core/AppScrollbar';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';
import Drop from 'pages/components/Dropdowns/Drop';
import clsx from 'clsx';
import styles from '../index.module.scss';

import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import { ReactComponent as Logo } from '../../../assets/user/login.svg';

const Signin = () => {
  const { messages } = useIntl();
  const [validated, setValidated] = useState(false);

  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log('Finish');
    setValidated(true);
  };

  return (
    <div className={clsx(styles.userPages, 'd-flex flex-column')}>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Register Form' />
        <div
          className={clsx(
            styles.userContainer,
            'd-flex flex-column align-items-center justify-content-center',
          )}
          key='a'>
          <Card
            className={clsx(
              styles.userCard,
              styles.userCardLg,
              'w-100 overflow-hidden text-center',
            )}>
            <AppRowContainer>
              <Col xs={12} md={4}>
                <div
                  className={clsx(
                    styles.userStyledImg,
                    'h-auto w-100 d-inline-block',
                  )}>
                  <Logo />
                </div>
                <h6 className={styles.notificationStyle}>Une fois soumis, le formulaire n'est plus modifiable !!!</h6>
              </Col>
              <Col xs={12} md={8}>
                <div
                  className={clsx(
                    styles.userCardHeader,
                    'd-flex align-items-center justify-content-center',
                  )}>
                  <h3>
                    <IntlMessages id='Register Form' />
                  </h3>
                </div>

                <Form
                  className={clsx(styles.userForm, 'mb-0')}
                  name='basic'
                  noValidate
                  validated={validated}
                  onSubmit={onSubmit}>
                  <AppScrollbar className={styles.scroll}>
                    <Container>

                      <Row>
                        <Col sm={12}>
                          <h4>Informations personnelles</h4>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingName"
                            label="Nom"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Prénom" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingSurname"
                            label="Prénom"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Prénom" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Date de naissance"
                            className="mb-3"
                          >
                            <Form.Control type="date" placeholder="Date de naissance" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingPlaceOfBirth"
                            label="Lieu de naissance"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Lieu de naissance" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Nationalité"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Cameroun</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Civilité"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Célibataire</NavDropdown.Item>
                                    <NavDropdown.Item href="">Marié</NavDropdown.Item>
                                    <NavDropdown.Item href="">Divorcé</NavDropdown.Item>
                                    <NavDropdown.Item href="">Veuf</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Profession"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Enseignant au primaire</NavDropdown.Item>
                                    <NavDropdown.Item href="">Enseignant au secondaire</NavDropdown.Item>
                                    <NavDropdown.Item href="">Enseignant d'université</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <h4>Informations professionnelles</h4>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Statut professionnel"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Fonctionnaire</NavDropdown.Item>
                                    <NavDropdown.Item href="">Contractuel</NavDropdown.Item>
                                    <NavDropdown.Item href="">Privé</NavDropdown.Item>
                                    <NavDropdown.Item href="">aucun</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingPlaceOfBirth"
                            label="Numéro du décret d'intégration"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Numéro du décret d'intégration" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingPlaceOfBirth"
                            label="Numéro du décret de contractualisation"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Numéro du décret de contractualisation" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Grade"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">PLET</NavDropdown.Item>
                                    <NavDropdown.Item href="">PLEG</NavDropdown.Item>
                                    <NavDropdown.Item href="">PCEG</NavDropdown.Item>
                                    <NavDropdown.Item href="">PCET</NavDropdown.Item>
                                    <NavDropdown.Item href="">PENI</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Matière enseignée"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">en cours...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingIndice"
                            label="Indice"
                            className="mb-3"
                          >
                            <Form.Control type="number" placeholder="Indice" min={0} />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingIndice"
                            label="Matricule"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="text" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingIndice"
                            label="Lieu d'enseignement"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Lieu d'enseignement" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Date de début"
                            className="mb-3"
                          >
                            <Form.Control type="date" placeholder="Date de début" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Net perçu mensuellement"
                            className="mb-3"
                          >
                            <Form.Control type="number" min={0} placeholder="Net perçu mensuellement" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Arreté d'affectation"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Arreté d'affectation" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Date de 1ère prise de fonction"
                            className="mb-3"
                          >
                            <Form.Control type="date" placeholder="Date de 1ère prise de fonction" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Numéro de référence"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Numéro de référence" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Nom du ministère"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">MINESEC</NavDropdown.Item>
                                    <NavDropdown.Item href="">MINEDUB</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12} md={6}>
                          <h4>Région d'exercice</h4>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Nom du pays"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Cameroun</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Nom de la région"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Centre</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Nom du département"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">MFOUNDI</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Nom de l'arrondissement"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">YDe 5e</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Nom de l'établissement"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Lycée bilingue de Yde</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Nom du ministère"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">MINESEC</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Etat du chef d'établissement"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Proviseur</NavDropdown.Item>
                                    <NavDropdown.Item href="">Directeur</NavDropdown.Item>
                                    <NavDropdown.Item href="">Principal</NavDropdown.Item>
                                    <NavDropdown.Item href="">Autres...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Logo de votre établissement"
                            className="mb-3"
                          >
                            <Form.Control type="file" placeholder="Logo de votre établissement" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <h4>{"Création du compte(informations)"}</h4>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingName"
                            label="Nom"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Prénom" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingSurname"
                            label="Prénom"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Prénom" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Date de naissance"
                            className="mb-3"
                          >
                            <Form.Control type="date" placeholder="Date de naissance" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingPlaceOfBirth"
                            label="Lieu de naissance"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Lieu de naissance" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingPlaceOfBirth"
                            label="Email valide"
                            className="mb-3"
                          >
                            <Form.Control type="email" required placeholder="Email valide" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingPlaceOfBirth"
                            label="Matricule"
                            className="mb-3"
                          >
                            <Form.Control type="text" required placeholder="Matricule" />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col>
                          <h4>Situation civile</h4>
                          {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3">
                              <Form.Check
                                reverse
                                label="Fonctionnaire"
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                              />
                              <Form.Check
                                reverse
                                label="Contractuel"
                                name="group1"
                                type={type}
                                id={`reverse-${type}-2`}
                              />
                              <Form.Check
                                reverse
                                label="Aucun"
                                type={type}
                                id={`reverse-${type}-3`}
                              />
                            </div>
                          ))}
                        </Col>
                      </Row> */}
                    </Container>
                  </AppScrollbar>
                </Form>
              </Col>
              <Col sm={12} className={styles.btn}>
                <Button className={styles.btnCustom} type='submit'>
                  <IntlMessages id='submit' />
                </Button>
              </Col>
            </AppRowContainer>
          </Card>
        </div>
      </AppAnimateGroup >
    </div >
  );
};

export default Signin;
