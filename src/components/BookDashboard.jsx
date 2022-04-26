import React, {useEffect} from 'react'
import { Dropdown } from './Dropdown'
import Navbar from './Navbar'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Carditem } from './Carditem';
import { useDispatch, useSelector } from 'react-redux';
import { addBookData } from '../redux/Actions';
  
export const BookDashboard = () => {
    const dispatch = useDispatch();
    const data = useSelector(store => store.filteredData);
    const type = "books";
    useEffect(() => {
        dispatch(addBookData())
    },[])
  return (
      <Box>
          <Navbar type={type}/>
          <Dropdown />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12}}>
                {data.map((e, index) => (
                <Grid item xs={4} sm={4} md={4} lg={3} key={index}>
                     <Carditem 
                         title = {e.title}
                         image = {e.image}
                         author = {e.author}
                         price = {e.price}
                          />
                </Grid>
                ))}
            </Grid>
            </Box>
      </Box>
  )
}
