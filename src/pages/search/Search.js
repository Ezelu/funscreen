// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Search.css';
// import { Button, createTheme, TextField, ThemeProvider, Tabs, Tab, CircularProgress} from '@material-ui/core';
// import SearchIcon from '@mui/icons-material/Search';
// import SingleContent from '../../components/SingleContent/SingleContent';
// import CustomPagination from '../../components/pagination/CustomPagination';







// export default function Search () {

//   const [type, set_type] = useState(0);
//   const [page, set_page] = useState(1);
//   const [search_text, set_search_text] = useState('sample');
//   const [contents, set_contents] = useState();
//   const [number_of_pages, set_number_of_pages] = useState();
//   const [loading, set_loading] = useState(false);



//   const darkTheme = createTheme({
//     palette: {
//       type: 'dark',
//       primary: {
//         main: '#fff'
//       }
//     }
//   })


//   const fetchSearch = async () => {
//     set_loading(true)

//    const { data } = await axios.get(
//     `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=e002f08f46e0049891b3812857957fab&language=en-US&query=${search_text}&page=${page}&include_adult=false`
//     );




//     set_loading(false);
//     set_contents(data.results);
//     set_number_of_pages(data.total_pages);
//     console.log(data)
//   }


//   useEffect(() => {
//     window.scroll(0, 0)
//     fetchSearch();
//   }, [type, page])





//   return (
//     <div>
//       <h2> Search </h2>
//       <ThemeProvider theme={darkTheme}>
//       <div className="container">
//         <TextField
//           style={{flex: 1}}
//           className="search_box"
//           label="Search"
//           variant="filled"
//           onChange = {(e) => set_search_text(e.target.value)}
//         />
//         <Button variant='contained' style={{
//           marginLeft: 10,
//         }}> 
//           <SearchIcon />
//         </Button>
//       </div>

//         <Tabs 
//           value={type}
//           indicatorColor='primary'
//           textColor='primary'
//           className='tabs'
//           onChange={(event, new_value) => {
//             set_type(new_value);
//             set_page(1)
//           }}>
//           <Tab style={{width: '50%'}} label="Movies" />
//           <Tab style={{width: '50%'}} label="TV Series" />
//         </Tabs>
//       </ThemeProvider>

      
//       <div className='trending'>
//         {
//           search_text &&
//           loading ? <CircularProgress style={{
//             display: 'flex',
//             alignItems: 'center',
//             display: 'block',
//             marginLeft: '50%',
//             marginTop: '5%',
//             color: 'white'
//           }}/> : 
//           contents.map(each => {
//             return <SingleContent 
//                       key = {each.id}
//                       poster = {each.poster_path} 
//                       title = {each.title}
//                       date = {each.release_date || each.first_air_date}
//                       media_type = "movie"
//                       vote_average = {each.vote_average}
//                        />
//           })
//         }
//       </div>

//         {number_of_pages > 1 && (<CustomPagination set_page={set_page} numberOfPages={500}/>)}
//     </div>
//   )
// }
















































import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Search.css';
import { Button, createTheme, TextField, ThemeProvider, Tabs, Tab, CircularProgress} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';







export default function Search () {

  const [type, set_type] = useState(0);
  const [page, set_page] = useState(1);
  const [search_text, set_search_text] = useState('sample');
  const [contents, set_contents] = useState();
  const [number_of_pages, set_number_of_pages] = useState();
  const [loading, set_loading] = useState(false);



  const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#fff'
      }
    }
  })


  const fetchSearch = async () => {
    set_loading(true)

   const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=e002f08f46e0049891b3812857957fab&language=en-US&query=${search_text}&page=${page}&include_adult=false`
    );




    set_loading(false);
    set_contents(data.results);
    set_number_of_pages(data.total_pages);
    console.log(data)
  }


  useEffect(() => {
    window.scroll(0, 0)
    fetchSearch();
  }, [type, page])





  return (
    <div>
      <h2> Search </h2>
      <ThemeProvider theme={darkTheme}>
      <div className="container">
        <TextField
          style={{flex: 1}}
          className="search_box"
          label="Search"
          variant="filled"
          onChange = {(e) => set_search_text(e.target.value)}
        />
        <Button variant='contained' style={{
          marginLeft: 10,
        }}> 
          <SearchIcon />
        </Button>
      </div>

        <Tabs 
          value={type}
          indicatorColor='primary'
          textColor='primary'
          className='tabs'
          onChange={(event, new_value) => {
            set_type(new_value);
            set_page(1)
          }}>
          <Tab style={{width: '50%'}} label="Movies" />
          <Tab style={{width: '50%'}} label="TV Series" />
        </Tabs>
      </ThemeProvider>

      
      <div className='trending'>
        {
          search_text &&
          loading ? <CircularProgress style={{
            display: 'flex',
            alignItems: 'center',
            display: 'block',
            marginLeft: '50%',
            marginTop: '5%',
            color: 'white'
          }}/> : 
          contents.map(each => {
            return <SingleContent 
                      key = {each.id}
                      poster = {each.poster_path} 
                      title = {each.title}
                      date = {each.release_date || each.first_air_date}
                      media_type = "movie"
                      vote_average = {each.vote_average}
                       />
          })
        }
      </div>

        {number_of_pages > 1 && (<CustomPagination set_page={set_page} numberOfPages={500}/>)}
    </div>
  )
}