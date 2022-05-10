import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core';






const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
})



export default function CustomPagination({set_page, numberOfPages = 10}){

  const handle_page_change = (page) => {
    set_page(page);
    window.scroll(0, 0)
  }





  return (
    <div style = {{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: 10,
      }}>

      <ThemeProvider theme={darkTheme}>
        <Pagination
          style={{fontFamily: 'Lucida Sans'}}
          count={numberOfPages} 
          onChange={(e) => handle_page_change(e.target.textContent)}/>
      </ThemeProvider>
    </div>
  )
}