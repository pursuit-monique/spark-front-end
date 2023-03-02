import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AboutForms() {
        let navigate = useNavigate();
            

        const [form, setForm] = useState({
            'name': '',
            'gender': '',
            'about': '',
            'profile': '',
            'mood': '😊',
            'theme': '',
            'has_tasks': false,
            'has_blockers': false

        });

        const API = process.env.REACT_APP_API_URL;

        const handleSubmit = async (event) => {
            event.preventDefault();

            const newUser = form;

            const addUser = (newUser) => {
              axios
                .post(`${API}/spark`, newUser)
                .then(
                  () => {
                    navigate(`/`);
                  },
                  (error) => console.error(error)
                )
                .catch((c) => console.warn("catch", c));
            };
            addUser(newUser);
        };
        function handleChange(evt){
            evt.target.value === "false" ||  evt.target.value === "true" ?  setForm({...form, [evt.target.id]: !form[evt.target.id]}) : setForm({...form, [evt.target.id]: evt.target.value});
            console.log(evt.target.id);
            console.log(evt.target.value);
            console.log(form);
        }

        return (
            <Container className="bg-light border rounded border-2 border-dark g-3 mt-5">
                <form onSubmit={handleSubmit}>

                    <Row className="g-3">
                    <Col className="bg-dark" style={{width: '20vw'}}></Col>
                       <Col as='div' className="form-floating mb-3">
                            <input className="border-4 mt-2 mb-2 form-control" id="name" type="text"  placeholder="name@example.com" value={form.name} onChange={handleChange} />
                            <label htmlFor="name">
                                Name
                            </label>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row>
                    <Col className="bg-dark" style={{width: '15vw'}}></Col>
                       <Col as='div' className="form-floating mb-3">
                        <input id="gender" placeholder="gender" className="form-control" type="text" style={{width: '15vw'}} value={form.gender} onChange={handleChange} />
                        <label htmlFor="gender">
                            Gender
                        </label>
                    </Col>
                        <Col></Col>
                    </Row>

                    <Row>
                    <Col className="bg-dark" style={{width: '15vw'}}></Col> 
                       <Col>
                        <label>
                            About you:
                            <textarea value={form.about} id="about" style={{width: '45vw'}}  onChange={handleChange} />
                        </label>
                    </Col>
                        {/* <Col></Col> */}
                    </Row>

                    <Row>
                       <Col className="bg-dark" style={{width: '15vw'}}></Col> 
                       <Col>
                        <label>
                            Your Profile Picture:
                            <input type="text" style={{width: '45vw'}} id="profile" value={form.profile} onChange={handleChange} />
                        </label>
                    </Col>
                        {/* <Col></Col> */}
                    </Row>

                    <Row>
                    <Col className="bg-dark"></Col> 
                       <Col>
                        <label>
                            Favorite Color:
                            <select className="form-select" value={form.theme} id="theme" onChange={handleChange}>
                                <option value="primary">-----</option>
                                <option value="primary">Blue</option>
                                <option value="danger">Red</option>
                                <option value="secondary">Light Gray</option>
                                <option value="warning">Yellow</option>
                                <option value="success">Green</option>
                                <option value="info">Cyan</option>
                                <option value="light">White</option>
                                <option value="black">Black</option>
                            </select>
                        </label>

                        <div className="form-check">
                    <label className="form-check-label">
                        Goals:
                        <input type="checkbox" className="form-check-input" id="has_tasks" value={form.has_tasks} onChange={handleChange} />
                    </label>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label">
                        Blockers:
                        <input type="checkbox" className="form-check-input" id="has_blockers" value={form.has_blockers} onChange={handleChange}></input>
                    </label>
                    </div>

                    </Col>
                        <Col></Col>
                    </Row>

                    
                    <Row>
                        <Col as="div" className="d-grid gap-2">
                    <button className="btn btn-dark" type="submit">Add User</button>
                    </Col>
                    </Row>
                </form>
            </Container>
        );
    }