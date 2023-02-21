import axios from "axios";  
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {linkGenerator, nullCheck} from "../utilities/functions"
import { Table, Image, Container, Row, Col }  from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;

export default function TableList () {
const [users, getUsers] = useState([]);

    useEffect(() => {
        axios
          .get(`${API}/spark/tables`)
          .then((response) => getUsers(response.data))
          .catch((c) => console.warn("catch", c));
      }, []);

    //   console.log(Object.keys(users[0]))

      return(
        <Container>
            <Row>
                <br></br>
            </Row>
            <Row>
                 <br></br>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Table striped hover variant="dark" className="center" responsive>
                        <thead>
                            <tr>
                                    {users.length > 0 ? Object.keys(users[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                )) : ''}
                    </tr>
                        </thead>
                        {users.map(user => {
                            return(
                                <tbody>  
                                    <tr>
                                            <td> 
                                                {user.id}
                                            </td>
                                            <td>
                                                <Link to={linkGenerator(user.id)}>{user.name}</Link>
                                            </td>
                                            <td>
                                                <Image src={user.profile} className="thumbnail" roundedCircle />
                                            </td>
                                        </tr>
                                </tbody>
                                )
                            }
                            )
                        }

                    </Table>
                </Col>
                <Col></Col>
            </Row>
        </Container>
      )
}