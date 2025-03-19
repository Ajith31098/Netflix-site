import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/constant'
import axios from '../../axios'


function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response =>{
            console.log(response.data)
            setMovies(response.data.results)
        })
    },[])
    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };    

    // const singleMovie = (id)=>{
    //     console.log(id)
    //     axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response =>{
    //         if (response.data.results.length!==0){
    //                 setUrlId(response.data.results[0])
    //         }else{
    //             console.log('Trailer not Allowed')
    //         }
    //         console.log(response.data)
    //         // setUrlId(response.data.results)
    //     })
    // }

    const singleMovie = (id) => {
        console.log(id);
        
        // Check if the movie ID is valid (e.g., not null or undefined)
        if (!id) {
            console.error("Invalid movie ID");
            return;
        }
    
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
            .then((response) => {
                // Check if there are any video results in the response
                if (response.data.results && response.data.results.length !== 0) {
                    // Set the video (trailer) URL in state
                    setUrlId(response.data.results[0]);
                } else {
                    // No trailer available
                    console.log('Trailer not available for this movie');
                    setUrlId(null); // Optionally set to null if you want to reset the URL ID
                }
            })
            .catch((error) => {
                // Catch any errors from the axios request
                console.error("Error fetching trailer:", error.message);
                // Optionally, you can set some state to display an error message to the user
                setUrlId(null); // Optionally reset URL ID in case of error
            });
    };
    


    // const singleMovie = (id) => {
    //     console.log('Movie ID:', id); // Log the movie ID for debugging
    //     if (!id) {
    //         console.error('Invalid movie ID');
    //         return;
    //     }
    
    //     axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    //         .then((response) => {
    //             console.log('Video response:', response.data);
    //             if (response.data.results.length !== 0) {
    //                 setUrlId(response.data.results[0]);
    //             } else {
    //                 console.log('Trailer not available');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching video:', error);
    //         });
    // };
    

    

  return (
    <div className='row'>
      <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj) =>
                <img onClick={()=>singleMovie(obj.id)} key={obj.id} className={props.isSmall ? 'smallPoster':"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}
            
        </div>

        {  urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
