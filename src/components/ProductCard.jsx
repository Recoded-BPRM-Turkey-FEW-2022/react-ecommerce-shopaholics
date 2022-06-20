import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductCard({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}




















//From Laith Academy YouTube vid
// import { Paper, Grid } from "@mui/material";
// export default function ProductCard () {
//   return (
//     <Grid item xs={3}>
//       <Paper elevation={3}>Hello</Paper>
//     </Grid>
//   )
// }




// FROM YOUTUBE VIDEO (USING OLD MUI)
// import React from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, IconButton } from '@mui/material';
// import { AddShoppingCart } from '@mui/icons-material';


// const ProductCard = ({ product }) => {
//   return (
//     <Card>
//         <CardMedia image="" title={product.name} />
//         <CardContent>
//             <div>
//                 <Typography variant='h5' gutterBottom>
//                     {product.name}
//                 </Typography>
//                 <Typography variant='h5'>
//                     {product.price}
//                 </Typography>
//             </div>
//             <Typography variant='h2' color={textSecondary}>
//                 {product.description}
//             </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//             <IconButton aria-label='Add to cart'>
//                 <AddShoppingCart />
//             </IconButton>
//         </CardActions>
//     </Card>
//   )
// }

// export default ProductCard