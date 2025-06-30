export const getMoviesData=async ({params})=>{
    console.log(params)
    const id=params.movieID
    const Api=`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_MY_KEY}`
    try {
        const response= await fetch(Api)
        const data=  response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}