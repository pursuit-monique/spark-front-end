import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Tasks({id, color}){
    const [tasks, setTasks] = useState([]);

    let navigate = useNavigate();
    let titleColor = `bg-${color} bg-gradient`;
    

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
          .get(`${API}/spark/tasks/${id}`)
          .then((res) => {
            console.table(res.data);
            setTasks(res.data);
          })

          .catch((error) => {
            console.log(error);
            navigate("/404");
          });
      }, []);

      const emotional = tasks.filter(task => task.name === 'Emotional Wellness');
      const mental = tasks.filter(task => task.name === 'Mental Wellness');
      const spiritual = tasks.filter(task => task.name === 'Spiritual Wellness');
      const social = tasks.filter(task => task.name === 'Social Wellness');
      const financial = tasks.filter(task => task.name === 'Financial Wellness');
      const environmental = tasks.filter(task => task.name === 'Environmental Wellness');






      return ( 
    <>
      <h2>My Goals:</h2>
        {emotional.length > 0 ? 
        <Card
        key="primary"
        text="dark"
        className="mb-2"
        // style={{ width: '18rem' }}
        >
        <Container> 
          <Row className="justify-content-md-center"><Card.Header className={titleColor}>Emotional Wellness</Card.Header></Row>
          <Card.Body>
          <Row> 
            
              <Col s={2} md={3}><img src="https://naturalemotionalwellness.com/wp-content/uploads/2020/12/cropped-Natural-Emotional-Wellness-LOGO-1-face-square.jpg" className="wellnessImg" alt="Emotional Wellness"></img></Col>
                <Col md={9}>{emotional.map(task => <li>{task.task} <Badge className="float-end" bg={color}>{task.is_complete ? 'Completed!': 'Incomplete'}</Badge></li>)}</Col>
          </Row>
          </Card.Body>
        </Container> 
        </Card> : ''}
        {social.length > 0 ? 
                <Card
                key="primary"
                text="dark"
                className="mb-2"
                // style={{ width: '18rem' }}
                >
        <Container> 
          <Row className="justify-content-md-center"><Card.Header className={titleColor}>Social Wellness</Card.Header></Row>
          <Card.Body>
          <Row> 
            
              <Col s={2} md={3}><img src="https://images.squarespace-cdn.com/content/v1/5e72b7407f116a59eac10cb4/9c7110a3-4642-437f-bf47-85b5d8310749/logo+square+transparent.gif" className="wellnessImg" alt="Social Wellness"></img></Col>
                <Col md={9}>{social.map(task => <li>{task.task} <Badge className="float-end" bg={color}>{task.is_complete ? 'Completed!': 'Incomplete'}</Badge></li>)}</Col>
                </Row>
          </Card.Body>
        </Container> 
        </Card>  : null}
        {mental.length > 0 ?
        <Card
        key="primary"
        text="dark"
        className="mb-2"
        >
        <Container> 
          <Row className="justify-content-md-center"><Card.Header className={titleColor}>Mental Wellness</Card.Header></Row>
          <Card.Body>
          <Row> 
              <Col s={2} md={3}><img src="https://www.lmc.org/wp-content/uploads/2020/09/TwoFaces_400_round.jpg" className="wellnessImg" alt="Mental Wellness"></img></Col>
                <Col md={9}>{mental.map(task => <li>{task.task} <Badge className="float-end" bg={color}>{task.is_complete ? 'Completed!': 'Incomplete'}</Badge></li>)}</Col>
                </Row>
          </Card.Body>
        </Container> 
        </Card>
         : null}
      </>
      )

}