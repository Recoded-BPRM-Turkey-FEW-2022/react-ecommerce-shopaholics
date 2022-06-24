import { getProducts } from '../util/API';
import { Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Link, useLocation } from "react-router-dom";

export default function AllProducts ({searchedName}) {
    const {status, data} = getProducts();

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "error") {
        return <div>Error</div>
    }

  return (
    <Container>
      <Grid container spacing={5} margin={4}>
        {searchedName && searchedName.map((product) => {
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
        })}
      </Grid>
    </Container>
  );
}



  