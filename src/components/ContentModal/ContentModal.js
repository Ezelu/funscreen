
// import React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import Modal from '@mui/material/Modal';
// import './ContentModal.css';
// import axios from 'axios';
// import Carousel from '../Carousel/Carousel'
// import { img_500, unavailable, unavailableLandscape } from '../../config/config';







// const style = {
//   margin: " 4% auto",
//   width: "90%",
//   height: "80%",
//   bgcolor: '#39445a',
//   boxShadow: 24,
//   overflowY: 'auto',
//   padding: 4,
//   border: 0,
//   outline: 0,
//   color: 'white',
// };






// export default function ContentModal({children, media_type, id}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [contents, set_contents] = React.useState();
//   const [loading, set_loading] = React.useState(false);
//   const [loading2, set_loading2] = React.useState(false);
//   const [trailer, set_trailer] = React.useState('')


//   console.log(media_type)
//   const fetchInfo = async () => {
//     set_loading(true)
//     const {data} = await axios.get(
//       `https://api.themoviedb.org/3/${media_type}/${id}?api_key=e002f08f46e0049891b3812857957fab&language=en-US`);

//     set_loading(false);
//     set_contents(data);
//     console.log(data)


//   }


//   const fetchTrailer = async () => {
//     set_loading2(true)
//     const {data} = await axios.get(
//       `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=e002f08f46e0049891b3812857957fab&language=en-US`);


//     console.log(data.results[0]?.key)
//     set_loading2(false);
//     set_trailer(data.results[0]?.key);
//   }

//   React.useEffect(() => {
//     fetchInfo();

//     fetchTrailer()
//   }, [])

  
















//   return (
//     <>
//       <div onClick={handleOpen} className='media' className='media'> {children} </div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {
//           contents &&
//           <div className="content_modal">
//             <div className='img_container'> 
//               <img
//                 className = "content_portrait"
//                 alt = {contents.name || contents.title}
//                 src={contents.poster_path ? `${img_500}/${contents.poster_path}`: unavailable} />

//               <img
//                 className = "content_landscape"
//                 alt = {contents.name || contents.title}
//                 src={contents.backdrop_path ? `${img_500}/${contents.backdrop_path}`: unavailableLandscape} />
//             </div>
 


//             <div className="content_about">
//               <h1 className='content_title'> 
//                 {(contents.name || contents.title).toUpperCase()} &nbsp;
//                 (
//                   {(
//                     contents.first_air_date ||
//                     contents.release_date ||
//                     "....."
//                   ).substring(0, 4)}
//                 )
//               </h1>
              
//               <p>
//                 {
//                   contents.tagline &&
//                   <i className='tagline'> {contents.tagline} </i>
//                 }
//               </p>

//               <span class="content_description">
//                 {contents.overview}
//               </span>

//               <div>
//                 <Carousel media_type={media_type} id={id} />
//               </div>

//               <Button 
//                 variant='contained' 
//                 startIcon={<YouTubeIcon />} 
//                 target="_blank" 
//                 href={`https://youtube.com/watch?v=${trailer}`} 
//                 className='button'
//                 style={{
//                   background: 'darkorange',
//                   '&:hover': {
//                     background: 'orange'
//                   }
//                 }}> 
//                   Watch Trailer 
//                 </Button>

//             </div>


//           </div>





//           }
//         </Box>
//       </Modal>
//     </>
//   );
// }
























































import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Modal from '@mui/material/Modal';
import './ContentModal.css';
import axios from 'axios';
import Carousel from '../Carousel/Carousel'
import { img_500, unavailable, unavailableLandscape } from '../../config/config';







const style = {
  margin: " 4% auto",
  width: "90%",
  height: "80%",
  bgcolor: '#39445a',
  boxShadow: 24,
  overflowY: 'auto',
  padding: 4,
  border: 0,
  outline: 0,
  color: 'white',
};






export default function ContentModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [contents, set_contents] = React.useState();
  const [loading, set_loading] = React.useState(false);
  const [loading2, set_loading2] = React.useState(false);
  const [trailer, set_trailer] = React.useState('')



  const fetchInfo = async () => {
    set_loading(true)
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=e002f08f46e0049891b3812857957fab&language=en-US`);

    set_loading(false);
    set_contents(data);
    console.log(data)


  }


  const fetchTrailer = async () => {
    set_loading2(true)
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=e002f08f46e0049891b3812857957fab&language=en-US`);


    console.log(data.results[0]?.key)
    set_loading2(false);
    set_trailer(data.results[0]?.key);
  }

  React.useEffect(() => {
    fetchInfo();

    fetchTrailer()
  }, [])

  
















  return (
    <>
      <div onClick={handleOpen} className='media' className='media'> {children} </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          loading ? <CircularProgress /> :
          <Box sx={style}>
            {
            contents &&
            <div className="content_modal">
              <div className='img_container'> 
                <img
                  className = "content_portrait"
                  alt = {contents.name || contents.title}
                  src={contents.poster_path ? `${img_500}/${contents.poster_path}`: unavailable} />

                <img
                  className = "content_landscape"
                  alt = {contents.name || contents.title}
                  src={contents.backdrop_path ? `${img_500}/${contents.backdrop_path}`: unavailableLandscape} />
              </div>
  


              <div className="content_about">
                <h1 className='content_title'> 
                  {(contents.name || contents.title).toUpperCase()} &nbsp;
                  (
                    {(
                      contents.first_air_date ||
                      contents.release_date ||
                      "....."
                    ).substring(0, 4)}
                  )
                </h1>
                
                <p>
                  {
                    contents.tagline &&
                    <i className='tagline'> {contents.tagline} </i>
                  }
                </p>

                <span class="content_description">
                  {contents.overview}
                </span>

                <div>
                  <Carousel media_type={media_type} id={id} />
                </div>

                <Button 
                  variant='contained' 
                  startIcon={<YouTubeIcon />} 
                  target="_blank" 
                  href={`https://youtube.com/watch?v=${trailer}`} 
                  className='button'
                  style={{
                    background: 'darkorange',
                    '&:hover': {
                      background: 'orange'
                    }
                  }}> 
                    Watch Trailer 
                  </Button>

              </div>


            </div>





            }
          </Box>
        }
      </Modal>
    </>
  );
}



