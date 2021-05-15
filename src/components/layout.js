import React from "react"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default function Layout({ children }) {
  return (
    <Container maxWidth="sm">
        <Box my={4}>   
         {children}
        </Box>
    </Container>    
  )
}