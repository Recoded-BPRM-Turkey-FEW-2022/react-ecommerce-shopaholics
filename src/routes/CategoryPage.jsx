import { Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CategoryPage ({category}) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => setProducts(data));
  },[products])

  return (
    <Container>
      <Grid container spacing={5} margin={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id}>
              <Link
                to={{
                  pathname: `/products/${product.id}`,
                  state: product,
                }}
              >
                <ProductCard product={product} />
              </Link>

            </Grid>
          )
        })};
      </Grid>
    </Container>
  );
}

export default CategoryPage;

  