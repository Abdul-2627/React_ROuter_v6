import "../components/Ui/card.css"
import { useLoaderData } from "react-router-dom"
import { Card } from "../components/Ui/Card" 
export const Movies=()=>{
    const moviesData= useLoaderData()
    console.log(moviesData)
    return<>
        <ul>
            {moviesData.Search.map((curMovie)=>{
                return <Card key={curMovie.imdbID} curMovie={curMovie}/>
            })}
        </ul>
    </>
}