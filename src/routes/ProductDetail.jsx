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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Rating from "@mui/material/Rating";

export default function ProductDetail({ products }) {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [rates, setRates] = useState(null);
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const amnt = (min, max) => (v) => v <= min ? min : v >= max ? max : v;
  const amntV = amnt(1, 10);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        setIsLoading(false);
        let actualData = await response.json();
        console.log(actualData);
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
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
        amount: amount,
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
  // console.log(productId);

  // console.log(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRates(data.rating.rate);
      setCount(data.rating.count);
    }, 1000);
  });

  return (
    <React.Fragment>
      {error && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <Card
          sx={{
            display: "flex",
            border: "none",
            boxShadow: "none",
            justifyContent: "center",
            marginTop: "50px",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "500px" }}
          >
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
                fontSize="30px"
              >
                ${data.price}
              </Typography>
              <Box>
                <Rating name="read-only" value={rates} readOnly />
                <Typography component="legend">Out of {count} rates</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pb: 1,
                  marginRight: "50px",
                  marginTop: "50px",
                }}
              >
                {data.description}
              </Box>
            </CardContent>
            <Box display="flex" margin="10px">
              <IconButton
                sx={{
                  width: "8%",
                  borderRadius: 0,
                  backgroundColor: "lightblue",
                }}
                onClick={() => setAmount(amntV(amount - 1))}
              >
                <RemoveIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  border: `1px solid lightblue`,
                  p: 1,
                  fontSize: "16px",
                }}
              >
                {amount}
              </Typography>
              <IconButton
                sx={{
                  width: "8%",
                  borderRadius: 0,
                  backgroundColor: "lightblue",
                }}
                onClick={() => setAmount(amntV(amount + 1))}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <CardActions>
              <Button
                variant="contained"
                aria-label="add to cart"
                margin="10px"
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
              maxWidth: "400px",
            }}
            image={`${data.image}`}
            alt="No image"
          />
        </Card>
      )}
    </React.Fragment>
  );
}
