import Termekek from "./products.json"
import AkciosTermekek from "./sales.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./akcio.css"

export default function Akciok() {
  return (
    <div>
      {AkciosTermekek.sales.map((sale) => {
        const saleProducts = Termekek.products.filter(
          (product) => sale.productIds.includes(product.id)
        );

        return (
          <div key={sale.id} className="bizonyos_akcio">
            <h3>{sale.title}</h3>
            <p>{sale.description}</p>
            <small>Érvényes: {sale.validUntil}</small>

            <div className="sale-products">
              {saleProducts.map((t) => (
                <Card style={{ width: '18rem' }} key={t.id}>
                <Card.Body>
                    <Card.Title>{t.name} </Card.Title>
                    <Card.Text>
                        {t.description}
                    </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{t.price}</ListGroup.Item>
                </ListGroup>
                    <Button variant="primary">Vásárlás</Button>
                </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  );
}
