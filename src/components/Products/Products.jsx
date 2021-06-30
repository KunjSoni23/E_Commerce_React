import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {
        id: 1, name: 'Shoes', description: 'Running Shoes', price: '$50'
    },
    {
        id: 2, name: 'MacBook', description: 'Apple Macbook', price: '$1200'
    },
]

const Products = () =>{
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((products)=>(
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}></Product>
                </Grid>
            ))} 
        </Grid>
    </main>
}

export default Products;