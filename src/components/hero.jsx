import Card from 'react-bootstrap/Card';

export default function Hero(status) {
    return (
        <Card border="dark" style={{ width: '100vw' }} className="bg-dark text-white">
          <Card.Img src="https://phlearn.com/wp-content/uploads/2019/03/david-klaasen-775082-unsplash.jpg?w=1600&quality=99&strip=all" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title></Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
}