import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {
        id: 1, name: 'Shoes', description: 'Running Shoes', price: '$50', image : 'https://media.self.com/photos/5ea9d5ffbb9c6b75996c7ef7/4:3/w_2560%2Cc_limit/running_shoes_woman.jpg'
    },
    {
        id: 2, name: 'MacBook', description: 'Apple Macbook', price: '$1200', image : '	https://cdn.mos.cms.futurecdn.net/knVjX2yJbeTGHFyuRRjM4Y-970-80.jpg.webp'
    },
]

const Products = () =>{
    return(
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}></Product>
                </Grid>
            ))} 
        </Grid>
    </main>
    )
}

export default Products;