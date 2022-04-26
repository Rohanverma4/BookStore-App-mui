import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, margin } from '@mui/system';
import { useNavigate } from 'react-router';

export const Carditem = ({title,image,author,price}) => {
    const [iconColor,setColor] = useState(true)
    const navigate = useNavigate()
    const changeColor = () => {
        setColor(!iconColor)
    }

    
  return (
                   <Card sx={{ maxWidth: 345 }}>
                       <Box width={100} margin="auto">
                       <CardMedia
                            component="img"
                            
                            height={100}
                            image={image}
                            alt="green iguana"
                        />
                       </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" height="auto">
                            {title}
                            </Typography>
                            <Typography variant="p" color="text.secondary" height="auto">
                             Author : {author}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                             Price : {price}
                            </Typography>
                        </CardContent>
                        <Box ml={6}>
                            <CardActions spacing={true}>
                                <FavoriteIcon onClick={changeColor} sx={iconColor ? {color:"black"} : {color: "red"}} />
                                <Box ml={5}>
                                   <Button variant="contained">Add to cart</Button>
                                </Box>
                            </CardActions>
                        </Box>
                        </Card>
  )
}
