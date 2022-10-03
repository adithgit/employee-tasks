import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import DateTimePicker from 'react-datetime-picker';
import Datetime from 'react-datetime';

function Addform(props) {
    const [ formData, setFormData ] = useState({})
    
    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    function handleDate(e, key) {
        console.log(e._d);
        const value = e._d;
        setFormData({...formData, [key]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div>
            <Form onChange = {handleChange}  onSubmit = {handleSubmit}>
                { props.type === "employee" ? 
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="employee name"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="9526616876"
                        />
                    </Form.Group>
                </Row>
                :
                <>
                <Row className="mb-3">
                    <Form.Group as={Col} md="9" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="enter title"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="priority" style={{display:"flex", alignItems:"end", justifyContent:"center"}} md="3" >

                        <Form.Check
                            defaultValue={false}
                            type="switch"
                            id="priority"
                            label="High Priority"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="description here"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group >
                        <Form.Label>Start Date and Time</Form.Label>
                        <Datetime id="start"   onChange={(e) => handleDate(e, "start")}  inputProps={{required:true}} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group controlId='end' >
                        <Form.Label>End Date and Time</Form.Label>
                        <Datetime id="end" onChange={(e) => handleDate(e, "end")} initialValue={new Date(2018, 11, 24, 10, 33, 30, 0)} inputProps={{required:true}} />
                    </Form.Group>
                </Row>
                </>
                }
                <Button style={{ width: '100%' }} variant="success" type="submit">Create</Button>
            </Form>
        </div>
    )
}

export default Addform