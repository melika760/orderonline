import { useState } from "react";
export default function useManage(){
    const[details,setdetails]=useState(false);
    const[item,setitem]=useState([]);
    function showdetails(){
        setdetails(!details)
    }
    const transformdata=(data)=>{
        const loadmeal=[]
for(const key in data){
    loadmeal.push({id:key,title:data[key].title,description:data[key].description,prices:data[key].price})
}
        setitem(loadmeal)
        
    }
 
    return{details,showdetails,transformdata,item}
}