import React from "react";
import {MachinepublicService, MachinePublic} from "../api";
import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import "../styles/MachineListPublic.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function MachineItem(props:MachinePublic ) {


    return (<tr className={"item"}>
                <td>{props.serNumM}</td>
                <td>{props.modelm_title}</td>
                <td>{props.modele_title}</td>
                <td>{props.serNumE}</td>
                <td>{props.modelt_title}</td>
                <td>{props.serNumT}</td>
                <td>{props.modelda_title}</td>
                <td>{props.serNumDA}</td>
                <td>{props.modelsa_title}</td>
                <td>{props.serNumSA}</td>
           </tr>
    );
}

export default function MachineListPublic() {
    const [sernum , setSernum] = useState('');
    const [machines , setMachines] = useState<MachinePublic [] | undefined>();
    const loadMachine  = async () => {
        setMachines(await MachinepublicService.machinepublicList());
    };

    useEffect(() => {
        loadMachine().then(() => {
        });

    }, []);

    async function loadMachineFilter() {
        setMachines(await MachinepublicService.machinepublicList(sernum));
    }

    return (
        <div>
            <h2 className="text-header">Электронная сервисная книжка "Мой Силант"</h2>
            <h3>Проверьте комплектация и технические характеристики техники Силант</h3>
            <Navbar  id="filter1">
                <Container fluid >
                        <Form className="d-inline-flex p-2 bd-highlight">
                            <Form.Control
                                type="search"
                                placeholder="Заводской номер"
                                className="me-2"
                                aria-label="Search"
                                value={sernum} onChange={e => setSernum(e.target.value)}
                            />
                            <Button variant="info" onClick={loadMachineFilter}>Найти</Button>
                        </Form>
                </Container>
            </Navbar>
            <h3>Информация о комплектации и технических характеристиках Вашей техники</h3>
            <div className="table1">
                <Table striped bordered hover className={"table12"} size="sm">
                    <thead><tr><th>Заводской номер машины</th><th>Модель машины</th><th>Модель двигателя</th>
                        <th>Заводской номер двигателя</th><th>Модель трансмиссии</th><th>Заводской номер трансмиссии</th>
                        <th>Модель ведущего моста</th><th>Заводской номер ведущего моста</th>
                        <th>Модель управляемого моста</th><th>Заводской номер управляемого мост</th></tr></thead>
                    { JSON.stringify(machines) !== '[]' &&
                    <tbody>
                    {machines && machines.map(machine => {
                        return <MachineItem key={machine.id} {...machine}/>;
                    })}
                    </tbody>
                }
                    { JSON.stringify(machines) === '[]'  &&
                        <tbody>
                        <tr className={"item"}>
                            <td>данных о машине с таким заводским номером нет в системе</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    }
                </Table>
            </div>
        </div>
    );
}

