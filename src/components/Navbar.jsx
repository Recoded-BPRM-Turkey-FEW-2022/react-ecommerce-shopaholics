import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


export default function ButtonAppBar({searchedName, setSearchedName, data, category, setCategory}) {

  function filterByCategory(value) {
    setCategory(value.toLowerCase()); // this returns undefined
    console.log(category);
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            onClick={()=>filterByCategory("men's%20clothing")}
            value="men's%20clothing" 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            <Link to={{pathname: `/products/category/men's%20clothing`}}>
            men's clothing
            </Link>
          </Button>
          <Button 
            onClick={()=>filterByCategory("jewelery")}
            value="jewelery" 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            <Link to={{pathname: `/products/category/jewelery`}}>
            jewelery
            </Link>
          </Button>
          <Button 
            onClick={()=>filterByCategory("electronics")}
            value="electronics" 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            <Link to={{pathname: `/products/category/electronics`}}>
            electronics
            </Link>
          </Button>
          <Button 
            onClick={()=>filterByCategory("women's%20clothing")}
            value="women's%20clothing" 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            <Link to={{pathname: `/products/category/women's%20clothing`}}>
            women's clothing
            </Link>
          </Button>
          <SearchBar
            placeholder="Type something"
            searchedName={searchedName}
            setSearchedName={setSearchedName}
            data={data}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
