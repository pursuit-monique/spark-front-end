import axios from "axios";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tasks from "./tasks";
import Blockers from "./blockers"

export default function User(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState([{
        'name': 'John Doe',
        'gender': 'male',
        'profile': "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000",
        'about': 'Nothing'
    }]);
    const {id} = useParams();
    let navigate = useNavigate();
    let borderColor;
    const API = process.env.REACT_APP_API_URL;

    const deleteUser = () => {
        axios
          .delete(`${API}/spark/${id}`)
          .then(() => {
            navigate(`/`);
            handleClose();
          })
          .catch((err) => console.error("catch", err));
      };

    useEffect(() => {
        axios
          .get(`${API}/spark/${id}`)
          .then((res) => {
            console.table(res.data);
            setUser(res.data)
            borderColor= `border-bottom border-${user[0].color}`;
          })
          .catch((error) => {
            console.log(error);
            navigate("/404");
          });
      }, [id]);

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col></Col>
                    <Col md={8}>
                        <h1 className="border-bottom border-primary">{user[0].name} Fakelastname</h1>
                    </Col>
                    <Col><CloseButton onClick={handleShow} /></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                className="border"
                                src={user[0].profile || "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"}
                            />
                            <Figure.Caption>
                                {user[0].gender}, feelin' {user[0].mood}
                            </Figure.Caption>
                        </Figure>
                        </Col>
                    <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                            <Col md={6}><p className="text-justify">{user[0].about || ''}</p></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                           { user[0].has_tasks ? <Tasks id={id} color={user[0].theme} /> : null }
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                        { user[0].has_blockers ? <Blockers id={id}/> : null }
                        </Col>
                        <Col></Col>
                    </Row>
            </Container>
        
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Delete your profile</Modal.Title>
</Modal.Header>
<Modal.Body>If you click on the button below, you will delete your profile.  Such changes cannot be reversed.</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={deleteUser}>
    Delete User
  </Button>
</Modal.Footer>
</Modal>
</>

    )
}