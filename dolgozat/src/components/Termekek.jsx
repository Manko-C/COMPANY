import Termekek from "./products.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./termekek.css"

export default function TermekekLista(){

    return(
        <div className="termekekdiv">
        {Termekek.products.map((t, index) =>(
    <Card style={{ width: '18rem' }} key={index}>
      <Card.Body>
        <Card.Title>{t.name} </Card.Title>
        <Card.Text>
            {t.description}
        </Card.Text>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{t.price}</ListGroup.Item>
        {t.description ? <ListGroup.Item>{t.discountPercent}%</ListGroup.Item> : ""}
      </ListGroup>
        <Button variant="primary">Vásárlás</Button>
    </Card.Body>
    </Card>
        ))}
        </div>
    )
}