import * as React from "react";

import Button from "@mui/material/Button";

import { useQuery, useMutation, QueryClient, useQueryClient } from "react-query";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';



export default function MediaCard() {
// const [cart, setCart] = useState([0]);
const {data, isLoading} = useQuery('cart', ()=> {
  return fetch('http://localhost:3000/posts').then((data)=> data.json());
});

const queryClient = useQueryClient()

queryClient.invalidateQueries()

//hadnle delete:
const deleteData = useMutation( (id) => {
  return fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
}, {
  onSuccess: ()=> {
    queryClient.invalidateQueries
  }
})
if (isLoading) return "Loading...";



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

return (
<div>


  {data.map((item)=> {
    return (

<Paper
      sx={{
        pt: 8,
        margin: 'auto',
        maxWidth: 700,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={4} sx={{p:5}} >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={item.title} src={item.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.amount} is added
              </Typography>
            </Grid>
            <Grid item>
            <Button onClick={()=> deleteData.mutate(item.id)}>Remove</Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${item.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

    )
  })}
</div>)
    
}
