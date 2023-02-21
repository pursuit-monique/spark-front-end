import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function linkGenerator(info) {
  return "./user/" + info;
}

// export function spliceCheck(response, state1, state2, state3) {
//   return CODE ? CODE : "";
// }

// export function gender(input) {}

export function taskGenerator(type, url) {
  if (type) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h4>{type} Wellness</h4>
        </Row>
        <Row>
          <Col xs={6} md={1}>
            <img
              src={url}
              className="wellnessImg"
              alt="Emotional Wellness"
            ></img>
          </Col>
          <Col>
            {type.map((task) => (
              <li>
                {task.task}{" "}
                <Badge bg="secondary">
                  {task.is_complete ? "Completed!" : "Incomplete"}
                </Badge>
              </li>
            ))}
          </Col>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
}
