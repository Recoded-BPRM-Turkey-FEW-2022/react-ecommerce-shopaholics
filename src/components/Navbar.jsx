import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar';


export default function ButtonAppBar({searchedName, setSearchedName, data, category, setCategory}) {


  function filterByCategory(e) {
    // console.log(e.target.innerText.toLowerCase());
    setCategory(e.target.key.toLowerCase());
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
          <Button onClick={(e)=>filterByCategory(e)} key="men's%20clothing" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            men's clothing
          </Button>
          <Button onClick={(e)=>filterByCategory(e)} key="jewelery" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            jewelery
          </Button>
          <Button onClick={(e)=>filterByCategory(e)} key="electronics" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            electronics
          </Button>
          <Button onClick={(e)=>filterByCategory(e)} key="women's%20clothing" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            women's clothing
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
