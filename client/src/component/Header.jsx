import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = ({title, subtile}) => {
  const theme = useTheme()
  return (
    <Box>
      <Typography
      variant='h2'
      // color={theme.pallete.secondary[200]} fontWeight="bold" 
      sx={{ mb : "5px" }}>
        {title}
      </Typography>
      <Typography
      variant='h5'
      // color={theme.pallete.secondary[200]} 
       >
        {subtile}
      </Typography>
    </Box>
  )
}

export default Header