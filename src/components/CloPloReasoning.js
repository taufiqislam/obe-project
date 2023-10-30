import React, { Fragment, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

function CloPloReasoning(props) {
    const [data, setData] = useState({
        'fname': 'sekul lorem lakjdlkfjsdlk  lksjflk jl ka kklasj lkkajdk ksjkjlskdfj aljlksj lksjf lkajf',
        'lname': 'hassan'
    });

    // Convert object into an array of objects
    const dataArray = Object.entries(data);

    return (
        <Fragment>
            <Container fluid className="mt-5 p-0">
                <Row>
                    <Col>
                        <Table striped bordered hover variant="light">
                            <thead>
                            <tr>
                                <th>Course Learning Outcomes(CLOs)</th>
                                <th>Program Learning Outcomes(PLOs)</th>
                                <th>Reasoning/Justification</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>CLO1 des</td>
                                <td>
                                   <Row>
                                       <Col lg={10} md={10} sm={10}><input className="form-control" type="text" placeholder="Enter PLO number"/></Col>
                                       <Col lg={2} md={2} sm={2}><Button className="px-2 py-0 m-0"> + </Button></Col>
                                   </Row>
                                    {
                                        // Map through the array of objects
                                        dataArray.map(([key, value]) => (
                                            <div key={key}>
                                                <Row>
                                                    <Col lg={10} md={10} sm={10}>{value}</Col>
                                                    <Col lg={2} md={2} sm={2}><Button className="px-2 py-0 m-0"> - </Button></Col>
                                                </Row>
                                            </div>
                                        ))
                                    }
                                </td>
                                <td> <textarea className="form-control" name="" id="" cols="22" rows="4"/> </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default CloPloReasoning;
