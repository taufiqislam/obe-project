import React, {Fragment, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import BscSemester from "./BSCSemester";
import BscYear from "./BSCYear";
import SyllabusTable from "./SyllabusTable";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'

function Syllabus(props) {

    const [selectedOption,setSelectedOption] = useState('');
    const [program,setProgram] = useState('');
    const [year,setYear] = useState('');
    const [semesterValue,setSemesterValue] = useState('');
    const [yearValue,setYearValue] = useState('');
    const [isVisible,setIsVisible] = useState(false);

    const showTable=()=>{
        setIsVisible(!isVisible);
    }


    const yearChange = (e)=>{
        setYearValue(e.target.value);
    }

    const semesterChange = (e)=>{
        setSemesterValue(e.target.value);
    }

    const handleChange = (e)=>{
        setSelectedOption(e.target.value);
    }
    const programHandle = (e)=>{
        setProgram(e.target.value);
    }

    const yearHandle = (e)=>{
        setYear(e.target.value);
    }

    return (
        <Fragment>
            <Container>
                <div className='row'>
                <div className='col-4 Heading1'>
                    <p>Curriculum: (2019-2020) - (2023-2024)</p>
                </div>
                <div className='col-4 Heading2'>
                    <h2>Syllabus</h2>
                </div>
                <div className='col-4 Heading3'>
                    <img src={logo} alt="Logo" />
                </div>
                </div>
                <Row>
                    <Col>
                        <div>
                            <label className='pe-5 pb-2'>Program:</label>
                             <input
                            name="pg"
                            id="pg1"
                            className='form-check-input'
                            type="radio"
                            value="bsc"
                            onChange={programHandle}
                            checked={program==="bsc"}
                            />
                            <label htmlFor="pg1" className='pe-5 pb-2'>B.S.C</label>
                            <input
                                name="pg"
                                id="pg2"
                                className='form-check-input'
                                type="radio"
                                value="msc"
                                onChange={programHandle}
                                checked={program==="msc"}
                            />
                            <label htmlFor="pg2" className='pe-5 pb-2'>M.S.C</label>
                        </div>
                        <div>
                            <label className='pe-5 pb-2'>System:</label> 
                            <input
                            name="sys"
                            id="sys1"
                            className='form-check-input'
                            type="radio"
                            value="semester"
                            onChange={handleChange}
                            checked={selectedOption==="semester"}
                            />
                            <label htmlFor="sys1" className='pe-5 pb-2'>Semester</label>
                            <input
                                name="sys"
                                id="sys2"
                                className='form-check-input'
                                type="radio"
                                value="year"
                                onChange={handleChange}
                                checked={selectedOption==="year"}
                            />
                            <label htmlFor="sys2" className='pe-5 pb-2'>Year</label>
                        </div>
                        <div>
                            <label htmlFor="">Starting Session</label>
                            <Form.Select onChange={yearHandle} value={year} >
                                <option value="">choose session</option>
                                <option value="2018-2019">2018-2019</option>
                                <option value="2019-2020">2019-2020</option>
                                <option value="2020-2021">2020-2021</option>
                                <option value="2021-2022">2021-2022</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        (selectedOption !== "" && program !== "" && year !== "") ? (
                            selectedOption==="year" ?(
                                <Fragment>
                                    <Col md={6} lg={6} sm={6}>
                                        <BscYear yearChange={yearChange} yearValue={yearValue}/>
                                    </Col>
                                    <Col md={6} lg={6} sm={6}> </Col>
                                    <Button className="customBtn" onClick={showTable}>Add</Button>
                                </Fragment>
                            )  : (
                                <Fragment>
                                    <Col md={6} lg={6} sm={6}>
                                        <BscYear yearChange={yearChange} yearValue={yearValue} />
                                    </Col>
                                    <Col md={6} lg={6} sm={6}>
                                        <BscSemester semesterValue={semesterValue} semesterChange={semesterChange} />
                                    </Col>
                                    <Button className="customBtn" onClick={showTable}>Add</Button>
                                </Fragment>
                            )
                        ) : (
                            <Col>
                                <p>Please select all options.</p>
                            </Col>
                        )
                    }
                </Row>

            </Container>
            {
                isVisible ?
                    <SyllabusTable
                        selectedOption={selectedOption}
                        program={program}
                        year={year}
                        semesterValue={semesterValue}
                        yearValue={yearValue}
                    />:""

            }
        </Fragment>
    );
}

export default Syllabus;