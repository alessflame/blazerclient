export const getToken=()=>{

if(localStorage.getItem("blazerToken"))
{
     return localStorage.getItem("blazerToken");
}

}