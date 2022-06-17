import React from 'react'
import { Box, Typography, Button} from '@mui/material'
import KM from '../Assests/images/KM.jpg'


const HeroBanner = () => {

  return (
    <Box sx={{
      mt: {lg:"212px", xs: '70px'},
      ml: {sm: '50px'}
    }} position="relative" p="20px">
      <Typography 
          color="#356358"
          fontWeight={'600'}
          fontSize='55px'
      >
        Eight Gates Fitness 
      </Typography>
      <Typography fontWeight={"700"} sx={{fontSize: {lg: '40px', xs:'36px'}}} mb="23px" mt="30px">
        "My motto is to be stronger <br/> than yesterday <br/> if I have to I'll be stronger <br/> than half a day ago, <br/> even a minute ago!" 
      </Typography>
      <Typography fontSize="22px" lineHeight={'35px'} mb={5}>
        Open the Gate of Limit with the Most Effective Exercises 
      </Typography>
      <Button href='#exercises'variant="contained" className="explore" style={{background: "#356358", color: "orange"}}
        sx={{backgroundColor: '#356358', padding:'10px'}}
        >Explore Exercises 
      </Button>
      <Typography
        fontWeight={600}
        color="#356358" 
        sx={{
          opacity: 0.2,
          display: {lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
        >
        POWER
      </Typography>
      <img src={KM} alt='best friends' className="hero-banner-img"/> 
    </Box>
  )
}

export default HeroBanner