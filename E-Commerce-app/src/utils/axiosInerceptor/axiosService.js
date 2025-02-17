import axios from "axios"


const axiosService = axios.create({
    baseURL:"https://api.escuelajs.co"
})

axiosService.interceptors.request.use((config)=>{
const token = localStorage.getItem("token")
config.headers["Authorization"] = `Bearer ${token}`;
return config;
}, (error) => {
    return Promise.error(error);
    
})

axiosService.interceptors.response.use((response)=>{
    return response
}, (error)=> {
   

const {status} = error.response;

    switch (status) {
        case 400:
           console.error("Bad request:", "Invalid request.");
alert(data?.message || "Bad request. Please check your input") 
            break;

   case 401:
    console.warn("Unauthorized. Redirecting to Sign In");
    alert("Session expired. Please Sign In again");
    window.location.href= "/signin"; 
    break;

case 403:
    console.error("Forbidden:", "Access denied.");
    alert("You do not have permision to perform this action")
   break; 

   case 404:
    console.error("Not found:", "Resource not found");
   alert("Requested resource not found.") 
break;

case 500:
console.error("Internal Server Error:","Something went wrong");
alert("Server error. Please try again later.");
break;
        default:
            console.error(`unhandled HTTP error (${status}):`,);
           alert(data?.message || "An unexpected error occured") 
            break;
    }



    return Promise.reject(error);
});


export default axiosService;
