import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetail({ products }) {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        console.log(actualData);
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  function handleClick() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rating: data.rating,
      }),
    };
    fetch("http://localhost:3000/posts", requestOptions)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          postId: data.id,
        })
      );
  }
  console.log(productId);

  return (
    <Card
      sx={{
        display: "flex",
        border: "none",
        boxShadow: "none",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "500px" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data.category}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            ${data.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {data.description}
        </Box>
        <CardActions>
          <Button
            variant="contained"
            aria-label="add to cart"
            onClick={handleClick}
          >
            <AddShoppingCartIcon sx={{ padding: "3px" }} />
            Add to Cart
          </Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          borderRadius: "5px",
          maxWidth: "300px",
        }}
        image={`${data.image}`}
        alt="No image"
      />
    </Card>
  );
}
