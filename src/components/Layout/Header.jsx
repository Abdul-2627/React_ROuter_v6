import { NavLink } from "react-router-dom"

export const Header=()=>{
    return(
        <header>
            <section>
                <div className="head container">
                    <div className="head_text">
                        <p>Welcome to stream app </p>
                    </div>
                    <div className="sign_in_up">
                        <NavLink to="#">Sign In</NavLink>
                        <NavLink to="#">Sign Up</NavLink>
                    </div>
                </div>
            </section>
            <div className="nav_bar container">
                <div className="logo">
                    <NavLink to="#">
                        <h3>DoomsDay</h3>
                    </NavLink>
                </div>
                <div className="nav_link">
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive})=>isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" 
                            // style={({isActive})=>{
                            //     return{
                            //         color: isActive ? "blue" : "black",
                            //     };
                            // }} 
                            to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}