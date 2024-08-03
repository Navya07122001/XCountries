import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Main = () => {
    const [data,setData]=useState([]);
    const fetchData=async()=>{
        try{
     const response=await axios.get("https://xcountries-backend.azurewebsites.net/all")
     const data1=await response.data;
     setData(data1);
        }
        catch(e){
            console.error("Error fetching data: ")
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div style={{display:"flex",flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',textAlign:"center"}}>
    {
        data.map((item)=>{
            return (
            <div style={{border:'1px solid black',borderRadius:"5px",padding:"10px", margin:"10px",height:"110px",width:"120px"}}>
              <img src={item.flag} alt="img" style={{height:"65px",width:"65px"}}/>
              <div style={{fontSize:"13px",fontWeight:600}}>{item.name}</div>
            </div> )
        })
    }
    </div>
  )
}

export default Main;