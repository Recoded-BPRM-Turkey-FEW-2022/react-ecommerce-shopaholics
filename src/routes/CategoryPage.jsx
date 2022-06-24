import { Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CategoryPage ({category}) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
    fetch(`https://sleepy-hollows-09914.herokuapp.com/category/${category}`)
    .then(response => response.json())
    .then(data => setProducts(data.data));
  },[products])

  return (
    <Container>
      <Grid container spacing={5} margin={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id}>
              <Link
                to={{
                  pathname: `/${product.id}`,
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

  