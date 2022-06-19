import React from 'react'
import { Grid } from "@mui/material"
import ProductCard from "../components/ProductCard"

const products = [
    {id: 1, name: "Shoes", description: "Running Shoes.", price: "$5"},
    {id: 2, name: "Macbook", description: "Apple MacBook.", price: "$10"}
]

const AllProducts = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map(product => {
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                </Grid>
            })}
        </Grid>
    </main>
}

export default AllProducts;