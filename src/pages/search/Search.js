import React, { useState } from 'react';
import { Button, createTheme, TextField, ThemeProvider} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';







export default function Search () {

  const [type, set_type] = useState(1)



  const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#fff'
      }
    }
  })








  return (
    <div>
      <h2> Search </h2>
      <ThemeProvider theme={darkTheme}>
      <div>
        <TextField
          style={{flex: 1}}
          className="search_box"
          label="Search"
          variant="filled"
          // onChange = {(e) => set_search_text(e.target.value)}
        />
        <Button variant='contained' style={{
          marginLeft: 10,
        }}> 
          <SearchIcon />
        </Button>
      </div>
      </ThemeProvider>
    </div>
  )
}