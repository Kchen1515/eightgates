import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => (
  <Box mt="80px" bgcolor="#356358">
    <Stack gap="40px" sx={{ alignItems: 'center', color: "white", fontSize: "2rem", fontWeight: '900' }} flexWrap="wrap" px="40px" pt="24px" >
      EIGHT GATES FITNESS
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' }, color:'white' }} mt="41px" textAlign="center" pb="40px">Made BY KYC</Typography>
  </Box>
);

export default Footer;