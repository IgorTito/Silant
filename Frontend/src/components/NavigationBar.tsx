import React, {} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar({catUser, name}: any ) {
    console.log(catUser)
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav fill variant="tabs">
                            <Navbar.Brand aria-disabled></Navbar.Brand>
                            <Nav.Link href="/"><h4>Модель</h4></Nav.Link>
                            <Nav.Link href="/claim"><h4>Рекламации</h4></Nav.Link>
                            <Nav.Link href="/maintenance"><h4>ТО</h4></Nav.Link>
                            {catUser === 'MG' &&
                                <h4><NavDropdown title="Справочники" id="nav-dropdown">
                                    <NavDropdown.Item href="/modelmachine">Модель машины</NavDropdown.Item>
                                    <NavDropdown.Item href="/modelengine">Модель двигателя</NavDropdown.Item>
                                    <NavDropdown.Item href="/modeltransmission">Модель трансмиссии</NavDropdown.Item>
                                    <NavDropdown.Item href="/modeldriveaxle">Модель ведущего моста</NavDropdown.Item>
                                    <NavDropdown.Item href="/modelsteeringaxle">Модель управляемого
                                        моста</NavDropdown.Item>
                                    <NavDropdown.Item href="/typemaintenance">Вид технического
                                        обслуживания</NavDropdown.Item>
                                    <NavDropdown.Item href="/typefailure">Характер отказа</NavDropdown.Item>
                                    <NavDropdown.Item href="/recoverymethod">Способ восстановления</NavDropdown.Item>
                                    <NavDropdown.Item href="/servicecompany">Сервисные компании</NavDropdown.Item>
                                </NavDropdown></h4>
                            }
                        </Nav>
                        { catUser === 'MG' &&
                            <div id='user'>Текущий пользователь - Менеджер {name}</div>
                        }
                        { catUser === 'CL' &&
                            <div id='user'>Текущий пользователь - Клиент {name}</div>
                        }
                        { catUser === 'SK' &&
                            <div id='user'>Текущий пользователь - Сервисная компания {name}</div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavigationBar;