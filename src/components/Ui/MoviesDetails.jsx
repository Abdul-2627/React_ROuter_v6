import { useLoaderData } from "react-router-dom"

export const MoviesDetails=()=>{
    const movieData=useLoaderData()
    console.log(movieData)
    const {Title,Actors,Director,Genre,Language,Plot,Poster,imdbRating,imdbVotes}=movieData
    return<>
        <div className="container-box">
  <div className="Movie-container">
    <div className="movie-content">
      <h2 className="movie-title">{Title}</h2>
      <p className="movie-language"><strong>Language:</strong> {Language}</p>
      <p className="movie-genre"><strong>Genre:</strong> {Genre}</p>
      <p className="movie-actors"><strong>Starring:</strong> {Actors}</p>
      <p className="movie-director"><strong>Director:</strong> {Director}</p>
      <p className="movie-Rating"><strong>Imdb Rating:</strong> {imdbRating}</p>
      <p className="movie-Vote"><strong>Imdb Votes:</strong> {imdbVotes}</p>
      <p className="movie-plot">{Plot}</p>
    </div>
    <div className="movie-img">
      <img src={Poster} alt={Title} />
    </div>
  </div>
</div>
 
    </>
}