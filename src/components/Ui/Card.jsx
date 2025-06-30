import { NavLink } from "react-router-dom"
import "./card.css"
export const Card=({curMovie})=>{
const {Poster , imdbID}=curMovie
return<>
<li className="hero">
    <div className="main">
        <div className="poster">
            <img src={Poster} alt={imdbID} />
        </div>
        <div className="ticket-container">
            <div className="ticket-content">
                <NavLink to={`/movies/${imdbID}`}>
                <button className="ticket-btn">Watch Now</button>
                </NavLink>
            </div>
        </div>
    </div>
</li>
</>
}