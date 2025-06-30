import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage=()=>{
    const error=useRouteError()
    const navigate=useNavigate()
    const  handleGoBack=()=>{
      navigate(-1)
    }
    console.log(error)
    if(error.status === 404){
        return(
            <div class="container-error">
    <div class="content">
      <img src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif" alt="404 error" class="error-gif" />
      <h1 class="error-title">Oops! Page Not Found</h1>
      <p class="error-message">The page you're looking for doesn't exist or has been moved.</p>
      <div class="buttons">
        <NavLink to="/" className="home-button">Home Page</NavLink>
        <button onClick={handleGoBack}>Previous Page</button>
      </div>
    </div>
  </div>
        )
    }
    return(
        <h1>404 Page Not Found</h1>
    )
}