import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState} from 'react';
import { styled,alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { searchData } from '../redux/Actions';
import { useNavigate } from 'react-router';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '35%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(6
        ),
      
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = ({type}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input,setInput] = useState('')
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const navigateCart = () => {
        navigate('/cart')
  }
  const handleSearch = (e) => {
      let obj = {
        type: type,
        input: input,
      }
      if (e.key === "Enter") {
        dispatch(searchData(obj))
       }
      console.log(obj)
  }
  return (
    <Box 
       sx={
         { 
           p: 2,
           backgroundColor:"blueviolet",
           height:"4rem",
           alignItems:"center"
         }
    }>
      <Stack
           marginTop="0.5rem"
           direction="row"
           spacing={23}  
           alignItems="center"
      >
          <Typography 
               variant="h5"
               color="white"
               marginLeft="4rem"
          >
            BookStore App 
          </Typography>
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handleInputChange}
                onKeyDown={handleSearch}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
          <Stack 
              direction="row"
              spacing={5}  
              alignItems="center">
                <Stack onClick={navigateCart} justifyContent="center">
                  <ShoppingCartIcon sx={{ color: "white",fontSize:"2rem" }}/>
                  <Typography 
                      variant="p"
                      color="white"
                  >
                    Cart
                  </Typography>
                </Stack>
                <Stack justifyContent="center">
                  <ShoppingBagIcon sx={{ color: "blue",fontSize:"2rem",margin: "auto" }} />
                  <Typography 
                      variant="p"
                      color="white"
                  >
                    Ordered
                  </Typography>
                </Stack>
                <Stack justifyContent="center">
                  <FavoriteIcon sx={{ color: "red",fontSize:"2rem", margin: "auto" }} />
                  <Typography 
                      variant="p"
                      color="white"
                  >
                    Liked
                  </Typography>
                </Stack>
          </Stack>
      </Stack>
    </Box>   
  )
}

export default Navbar