import { useState } from "react";
export default function useManage(){
    const[details,setdetails]=useState(false)
    function showdetails(){
        setdetails(!details)
    }
    return{details,showdetails}
}