import { useQuery } from "react-query";
import { Grid, Container } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };

  const { data, status } = useQuery("products", fetchProducts);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Grid container spacing={5} margin={4}>
        {data.map((product) => {
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

// export default function AllProducts () {
//         <Grid container justify="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//             {products.map(product => {
//                 <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//                     <ProductCard product={product} />
//                 </Grid>
//             })}
//         </Grid>
// }

// LINK STUFF
{
  /* <Link
to={{
  pathname: `/product/${product.id}`,
  state: product,
}}
> */
}
