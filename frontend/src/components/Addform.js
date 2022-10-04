import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Datetime from 'react-datetime';
import api from '../Connection/Api';
import qs from 'qs';
import { Toast } from 'react-bootstrap'; import { type } from '@testing-library/user-event/dist/type';
;

function Addform(props) {
    const [formData, setFormData] = useState({})
    const [toast, setToast] = useState(false);

    const toggleToast = (type, text) => {
        console.log(type);
        type ? setToast({
            type: type,
            text: text
        }) : setToast(false);

    }

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value;
        setFormData({ ...formData, [key]: value })
    }

    function handleDate(e, key) {
        console.log(e._d);
        const value = e._d;
        setFormData({ ...formData, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.type === "employee") addEmployee();
        else addTask();
    }

    const addEmployee = () => {
        api.post('/add/employee', qs.stringify(formData)).then((response) => {
            toggleToast("success", `created employee with Id : ${response.data.payload._id}`);
        }).catch((err) => {
            toggleToast("danger", `Creation failed.`);
        })
    }

    const addTask = () => {
        api.post(`add/task/${formData.id}`, qs.stringify(formData)).then((response) => {
            toggleToast("success", `Added task`);
        }).catch((err) => {
            toggleToast("danger", `Task addition failed.`);
        })
    }
    return (
        <div>
            <Toast show={toast} bg={toast.type} className='toast' onClose={() => toggleToast(null)}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{toast.type === "success" ? "success" : "error"}</strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>{toast.text}</Toast.Body>
            </Toast>
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                {props.type === "employee" ?
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="employee name"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="mobile">
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
                            <Form.Group controlId="id">
                                <Form.Label>Employee Id</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="enter your id here"
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="9" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="enter title"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="priority" style={{ display: "flex", alignItems: "end", justifyContent: "center" }} md="3" >

                                <Form.Check
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
                                <Datetime id="start" onChange={(e) => handleDate(e, "start")} inputProps={{ required: true }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">

                            <Form.Group controlId='end' >
                                <Form.Label>End Date and Time</Form.Label>
                                <Datetime id="end" onChange={(e) => handleDate(e, "end")} inputProps={{ required: true }} />
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