import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { remove } from '../store/cartSlice';



const Cart = () => {
    const products= useSelector(state =>state.cart);
    
    const dispatch= useDispatch();
    const removeToCart=(id)=>{
        //dispatch remove action  
        dispatch(remove(id));

    }

 const Cards = products.map((product) => (
    <div className='col-md-12 mb-4' style={{marginBottom:'10px'}}>
      <Card style={{ width: '18rem', height:'400px' }}>
        <Card.Img variant="top" src={product.image}  style={{width:'100px' , height: '130px'}}  />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
         
        </Card.Body>
        <Card.Footer>
             <Button variant="danger" onClick={()=>removeToCart(product.id)} >Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));


  return (
    <>
    
        <div className='row'>
            {Cards}

        </div>

      
    </>
  )
}

export default Cart
