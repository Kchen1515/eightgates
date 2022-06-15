import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Lee from '../Assests/images/Logo-1.jpg'
import './Navbar.css'



const Navbar = () => {
  
  return (
    <Stack direction={"row"} alignItems="center" justifyContent="space-around" sx={{gap:{sm: "122px", xs: "40px" }, mt:{sm: '32px', xs:'20px'}, justifyContent: "none"}} px='20px'>
      <Link to='/' >
        <img src={Lee} alt="muscle logo" className='Lee'
          styles={{width:"10px", height: '10px',margin:"0 20px"}}/>
      </Link>
      <Stack direction={'row'} gap="40px" fontSize='24px' alignItems="flex-end" >
        <Link className='home'to='/' style={{textDecoration: "none", color: "#356358", borderBottom: "3px solid #859174", fontWeight: '600'}}>HOME</Link>
        <a  className='exercise'href="#exercises" style={{textDecoration: 'none', color: "#859174", fontWeight: '600',borderTop: "3px solid #356358"}}>EXERCISES</a>
      </Stack>
    </Stack>
  )
}

export default Navbar