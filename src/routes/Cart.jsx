import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { posts } from "../../db.json"


export default function BasicCard() {
    const sum = posts.reduce((acc, curr) => acc+curr);
    const noOfItems = posts.length;
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6">
            You have {noOfItems} items
            <br />
            ${sum}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Proceed to Checkout</Button>
        </CardActions>
      </Card>
    );
  }


export default function MediaCard() {


    const [cart, setCart] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])
  
    const handleDelete = async (id) => {
      await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
      })
      const updatedCart = cart.filter(item => item.id != id)
      setCart(updatedCart)
    }


<BasicCard />



    // change age to qty later:
  const [age, setAge] = React.useState("");

// handles change of quantity :
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    // posts is the data coming from the db.json:
    posts.map( (item) => {
        return (
            <Card sx={{ maxWidth: 260  }}>
      <CardMedia 
        key = {item.id}
        component="img"
        height=""
        image= {item.image}
        alt= {item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ minWidth: 130 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Change Qty
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Change Quantity"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button onClick={handleDelete} sx={{ ml: "1rem" }} variant="contained" size="large">
          Delete
        </Button>
      </CardActions>
    </Card>
        )
    })
    
  );
}
