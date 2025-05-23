import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Product = () => {
  const dispatch = useDispatch();

  const { data: products = [], status, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!Array.isArray(products)) return <p>Unexpected data format!</p>; // Failsafe

  return (
    <div className="container">
      <h2 className="my-4">Products Dashboard</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <Card style={{ width: '18rem', height: '400px' }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '100px', height: '130px', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
