import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "../Layout/Footer"
import { Header } from "../Layout/Header"
import { Loading } from "../Layout/Loading"
 const AppLayout=()=>{
   const navigation =useNavigation()
   if(navigation.state === "loading") return <Loading />;
    return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
)
}

export default AppLayout;