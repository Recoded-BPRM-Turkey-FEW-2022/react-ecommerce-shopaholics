import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';


const ProductCard = ({ product }) => {
  return (
    <Card>
        <CardMedia image="" title={product.name} />
        <CardContent>
            <div>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    {product.price}
                </Typography>
            </div>
            <Typography variant='h2' color={textSecondary}>
                {product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label='Add to cart'>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default ProductCard