// import { getProductsByCategory } from '../util/API';
import { Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CategoryPage ({category}) {
    // const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    // const {status, data} = getProductsByCategory(categoryName);
    
    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])

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
          );
        })}
        ;
      </Grid>
    </Container>
  );
}

export default CategoryPage;

  