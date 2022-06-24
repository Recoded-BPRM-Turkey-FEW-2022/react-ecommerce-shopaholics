import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';
import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar({searchedName, setSearchedName, data, category, setCategory}) {
  function filterByCategory(value) {
    setCategory(value.toLowerCase()); // this returns undefined
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar >
        <Toolbar sx={{ 
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around"}} >
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Link to="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopaholics
          </Typography>
          </Link>          

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

          <Link to="/cart">
          <Button style={{widht:"3rem", height:"3rem", position:"relative"}} borderRadius="50%">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            <div borderRadius="50%" style={{color:"white", height:"1.5rem", postion:"absolute", width:"1.5rem", bottom:0, right: 0, transform:"translate(-25%, -25%)"}}></div>
          </Button>
          </Link>
          
          

        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

