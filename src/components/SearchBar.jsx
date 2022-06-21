import { getProducts } from '../util/API';
import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// FROM HERE UNTIL THE END OF StyledInputBase JUST STYLES THE SEARCH BAR
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  // SEARCH BAR STYLING ENDS HERE
  

export default function SearchBar ({placeholder}) {
    const {status, data} = getProducts(); //CHECK IF THIS IS REFETCHING OR JUST BRINGING CACHED DATA
    console.log(data);
    const [searchedName, setSearchedName] = useState(data) // NOT SURE
    
    function filterByName (event) {
      setSearchedName(event.target.value);
    }

    const productsToDisplay = data.filter((d) => {
      if (searchedName === data) return true;

      return d.title === searchedName;
    })

  return (
    <Search>
        <SearchIconWrapper>
        <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase onChange={filterByName}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
        />
    </Search>
  )
}