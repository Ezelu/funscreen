// import React from 'react';
// import axios from 'axios';
// import './Trending.css';
// import SingleContent from '../../components/SingleContent/SingleContent';
// import { CircularProgress } from '@material-ui/core';
// import CustomPagination from '../../components/pagination/CustomPagination';


// export default function Trending () {

//   const [page, set_page] = React.useState(1)
//   const [contents, set_contents] = React.useState([])
//   const [loading, set_loading ] = React.useState(false);


//   const fetchTrending = async () => {
//     set_loading(true)
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/trending/all/day?api_key=e002f08f46e0049891b3812857957fab&page=${page}`
//     );
//     set_contents(data.results)
//     set_loading(false);

//   }



  
//   React.useEffect(() => {
//     fetchTrending()
//   }, [page])









//   return (
//     <div>
//       <h2> Trending Today </h2>
//       <div className='trending'>
//         {
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
//                       title = {each.title || each.name}
//                       date = {each.release_date || each.first_air_date}
//                       media_type = {each.media_type}
//                       vote_average = {each.vote_average}
//                        />
//           })
//         }
//       </div>

//         <CustomPagination set_page={set_page} />
//       </div>
//   )
// }

// // 15131197
















































import React from 'react';
import axios from 'axios';
import './Trending.css';
import SingleContent from '../../components/SingleContent/SingleContent';
import { CircularProgress } from '@material-ui/core';
import CustomPagination from '../../components/pagination/CustomPagination';


export default function Trending () {

  const [page, set_page] = React.useState(1)
  const [contents, set_contents] = React.useState([])
  const [loading, set_loading ] = React.useState(false);


  const fetchTrending = async () => {
    set_loading(true)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=e002f08f46e0049891b3812857957fab&page=${page}`
    );
    set_contents(data.results)
    set_loading(false);

  }



  
  React.useEffect(() => {
    fetchTrending()
  }, [page])









  return (
    <div>
      <h2> Trending Today </h2>
      <div className='trending'>
        {
          loading ? <CircularProgress style={{
            display: 'flex',
            alignItems: 'center',
            display: 'block',
            marginLeft: '50%',
            marginTop: '5%',
            color: 'white'
          }}/> : 
          contents.map(each => {
            return  <SingleContent 
                      key = {each.id}
                      poster = {each.poster_path} 
                      title = {each.title || each.name}
                      date = {each.release_date || each.first_air_date}
                      media_type = {each.media_type}
                      vote_average = {each.vote_average}
                      id={each.id}
                    />
          })
        }
      </div>

        <CustomPagination set_page={set_page} />
      </div>
  )
}

// 15131197