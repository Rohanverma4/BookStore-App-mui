import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { ascSort, descSort } from '../redux/Actions';

export const Dropdown = () => {
    const dispatch = useDispatch()
    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
        if(event.target.value > 0){
            dispatch(descSort())
        } else {
            dispatch(ascSort())
        }
    };
    
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 4, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sort}
        label="Sort"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Low to high</MenuItem>
        <MenuItem value={-1}>High to low</MenuItem>
      </Select>
    </FormControl>
    </Box>
  )
}
