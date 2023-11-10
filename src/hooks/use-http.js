import { useCallback } from "react";
import { useState } from "react";
export default function useHttp(){
    
const[loading,setloading]=useState(false)
const [error, setError] = useState(null);
  const sendRequest=useCallback(async (requestconfig,ApplyData)=>{
        setloading(true);
        setError(null);
        try{
            const response=await fetch(requestconfig.url,{method:requestconfig.method?requestconfig.method : 'GET',body:requestconfig.body? JSON.stringify(requestconfig.body) : null});
            const data= await response.json();
            ApplyData(data)
            if(!response.ok){
                throw new Error("Request failed!")
            }
        }
      catch (err) {
            setError(err.message || 'Something went wrong!');
          }

        setloading(false)
    },[])
    return{sendRequest,loading,error}
}