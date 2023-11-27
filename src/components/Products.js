import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios'
import { toast } from 'react-toastify'
import useLogout from '../hooks/useLogout';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


function Dashboard() {
  let token = sessionStorage.getItem('token')
  let [data, setData] = useState([])
  let logout = useLogout()
  const cardData = [
    {
      title: "Product 1",
      imageUrl:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
      price: "15",
      description: "The standard Lorem Ipsum passage is",

    },
    {
      title: "Product 2",
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: "25",
      moviedescription: "The standard Lorem Ipsum passage is",

    },

    {
      title: "Product 3",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: "30",
      moviedescription: "The standard Lorem Ipsum passage is ",

    },
    {
      title: "Product 4",
      imageUrl:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_24.jpg",
      price: "55",
      moviedescription: "The standard Lorem Ipsum passage is",

    },
    {
      title: "Product 5",
      imageUrl:
        " https://minimal-kit-react.vercel.app/assets/images/products/product_21.jpg",
      price: "10",
      moviedescription: "The standard Lorem Ipsum passage is ",

    },
    {
      title: "Product 6",
      imageUrl:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_13.jpg",
      moviedescription: "The standard Lorem Ipsum passage is ",
      price: "40",

    },


  ];

  const firstRowCards = cardData.slice(0, 3);


  return (
    <div className="fluid">
      <Header />
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '20px', justifyContent: 'center', alignItems: 'center' }}>
        {cardData.map((card, index) => (
          <Link key={index} to={`/detail/${index}`} style={{ textDecoration: 'none' }}>
            <Card style={{ width: '20rem', height: '25rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
              <Card.Img variant="top" src={card.imageUrl} style={{ height: '50%', objectFit: 'cover' }} />
              <Card.Body style={{ textAlign: 'center', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Card.Title style={{ fontSize: '1.5rem' }}>{card.title}</Card.Title>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>
                <div>
                  <Card.Text>${card.price}</Card.Text>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    style={{ marginTop: '1px', backgroundColor: 'orange' }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}





export default Dashboard