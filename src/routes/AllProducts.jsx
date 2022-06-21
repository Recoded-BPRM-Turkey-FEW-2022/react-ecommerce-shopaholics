import { getProducts } from '../util/API';
// import { QueryCache } from 'react-query'
import { Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';

export default function AllProducts () {
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
                {data.map(product => {
                    return (
                        <Grid item key={product.id} >
                            <ProductCard product={product}  />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
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