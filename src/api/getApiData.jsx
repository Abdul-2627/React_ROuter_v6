export const getApiData=async ()=>{
    const Api=`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_MY_KEY}&s=furious&page=1`
    try {
        const response= await fetch(Api)
        const data=  response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}