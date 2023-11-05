import React, { Fragment, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import {Link} from 'react-router-dom'

function CloPloReasoning(props) {
    

    return (
        <Fragment>
            <Container fluid className="mt-5 p-0">
                <Row>
                    <Col>
                        <label htmlFor="">CLO:</label>
                        <Form.Select>
                                <option value="">choose CLO</option>
                                <option>CLO 1</option>
                                <option>CLO 2</option>
                                <option>CLO 3</option>
                                <option>CLO 4</option>
                                <option>CLO 5</option>
                        </Form.Select>
                        <label className='pe-5 pb-2'>PLOs:</label> 
                        <input id='sys1' className='form-check-input' type="radio"/>
                        <label htmlFor="sys1" className='pe-5 pb-2'>PLO 1</label>
                        <input id='sys1' className='form-check-input' type="radio"/>
                        <label htmlFor="sys1" className='pe-5 pb-2'>PLO 2</label>
                        <input id='sys1' className='form-check-input' type="radio"/>
                        <label htmlFor="sys1" className='pe-5 pb-2'>PLO 3</label>
                        <input id='sys1' className='form-check-input' type="radio"/>
                        <label htmlFor="sys1" className='pe-5 pb-2'>PLO 4</label>
                        <input id='sys1' className='form-check-input' type="radio"/>
                        <label htmlFor="sys1" className='pe-5 pb-2'>PLO 5</label>
                        <label>Reasoning: </label>
                        <textarea></textarea>
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
                                <td>
                                    <p>
                                        CLO 1: Recall and recognition of essential terminologies, principles, and methods related to public health informatics.
                                    </p>
                                    
                                </td>
                                <td>
                                    <p>
                                        PLO 1: Public Health and Informatics Knowledge
                                    </p>
                                    
                                </td>
                                <td>
                                    CLO 1 aligns with PLO 1 as it focuses on acquiring foundational knowledge and understanding of essential terminologies, principles, and methods in public health informatics.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        CLO 2: Explain the interrelationships among public health data, information systems, and informatics tools, fostering a comprehensive understanding of their roles and functions.
                                    </p>
                                    
                                </td>
                                <td>
                                    <p>
                                        PLO 1: Public Health and Informatics Knowledge
                                    </p>
                                    <p>
                                        PLO 6: The Public Health and Professional Society
                                    </p>
                                    

                                </td>
                                <td>
                                    CLO 2 aligns with PLOI as it involves understanding the interrelationships between public health data, information systems, and informatics tools. It also aligns with PLO 6 as it fosters a comprehensive understanding of the roles and functions of informatics in the context of public health and its impact on society.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CLO 3: Apply informatics techniques to design and develop data collection systems for public health surveillance, ensuring data quality, integrity, and privacy.
                                </td>
                                <td>
                                    <p>
                                        PLO 3: Planning and Problem-Solving Abilities
                                    </p>
                                    <p>
                                        PLO 4: Effective Communication
                                    </p>
                                    <p>
                                    PLO 9: Project Management and Finance
                                    </p>
                                </td>
                                <td>
                                    CLO 3 aligns with PLO 3 as it involves applying informatics techniques for designing and developing data collection systems, which requires planning and problem-solving abilities. It also aligns with PLO 4 as it requires effective communication skills for ensuring data quality, integrity, and privacy. Additionally, it aligns with PLO 9 as it involves project management aspects of implementing data collection systems.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CLO 4: Analyze different strategies for utilizing informatics technologies to facilitate health promotion and disease prevention efforts in diverse populations.
                                </td>
                                <td>
                                    <p>
                                    PLO 2: Problem Analysis
                                    </p>
                                    <p>
                                    PLO 6: The Public Health Professional and Society
                                    </p>
                                </td>
                                <td>
                                    CLO 4 aligns with PLO 2 as it involves analyzing different strategies for utilizing informatics technologies in health promotion and disease prevention. It also aligns with PLO 6 as it emphasizes the role of public health professionals in utilizing informatics technologies to address diverse population needs.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CLO 5: Evaluate the effectiveness of informatics interventions in public health programs by critically assessing research studies and data-driven evaluations, ensuring privacy and confidentiality of health information.
                                </td>
                                <td>
                                    <p>
                                        PLO 2: Problem Analysis
                                    </p>
                                    <p>
                                        PLO 5: Research inclination
                                    </p>
                                    <p>
                                        PLO 10: Ethics
                                    </p>
                                </td>
                                <td>
                                    CLO 5 aligns with PLO 2 as it requires critical assessment of research studies and data-driven evaluations. It also aligns with PLO 5 as it involves research inclination in evaluating the effectiveness of informatics interventions. Additionally, it aligns with PLO 10 as it emphasizes the importance of ensuring privacy and confidentiality of health information during the evaluation process.
                                </td>
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
