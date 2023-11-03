import React, {Fragment, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import BscSemester from "./BSCSemester";
import BscYear from "./BSCYear";
import SyllabusTable from "./SyllabusTable";

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
                <Row>
                    <Col>
                        <div>
                            Program <input
                            name="pg"
                            id="pg1"
                            type="radio"
                            value="bsc"
                            onChange={programHandle}
                            checked={program==="bsc"}
                            />
                            <label htmlFor="pg1">B.S.C</label>
                            <input
                                name="pg"
                                id="pg2"
                                type="radio"
                                value="bsc"
                                onChange={programHandle}
                                checked={program==="msc"}
                            />
                            <label htmlFor="pg2">M.S.C</label>
                        </div>
                        <div>
                            System <input
                            name="sys"
                            id="sys1"
                            type="radio"
                            value="semester"
                            onChange={handleChange}
                            checked={selectedOption==="semester"}
                            />
                            <label htmlFor="sys1">Semester</label>
                            <input
                                name="sys"
                                id="sys2"
                                type="radio"
                                value="year"
                                onChange={handleChange}
                                checked={selectedOption==="year"}
                            />
                            <label htmlFor="sys2">Year</label>
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