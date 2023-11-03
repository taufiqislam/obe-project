import React, {Fragment} from 'react';
import {Container, Row, Table} from "react-bootstrap";

function SyllabusTable({yearValue,semesterValue,year,program,selectedOption}) {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Table>
                        <thead>
                        <tr>
                            <th>Program</th>
                            <th>System</th>
                            <th>Starting Session</th>
                            <th>Year</th>
                            <th>Semester</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{program}</td>
                            <td>{selectedOption}</td>
                            <td>{year}</td>
                            <td>{yearValue}</td>
                            <td>{semesterValue}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </Fragment>
    );
}

export default SyllabusTable;