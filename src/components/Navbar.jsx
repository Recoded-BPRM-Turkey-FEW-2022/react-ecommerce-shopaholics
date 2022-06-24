import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';


export default function ButtonAppBar({searchedName, setSearchedName, data, category, setCategory}) {

  function filterByCategory(e) {
    setCategory(e.target.value.toLowerCase()); // this returns undefined
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
            onClick={(e)=>filterByCategory(e)}
            value="men's%20clothing" 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            men's clothing
          </Button>
          <Button 
            onClick={(e)=>filterByCategory(e)}
            value="jewelery" 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            jewelery
          </Button>
          <Button 
            onClick={(e)=>filterByCategory(e)}
            value="electronics" 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            electronics
          </Button>
          <Button 
            onClick={(e)=>filterByCategory(e)}
            value="women's%20clothing" 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
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
