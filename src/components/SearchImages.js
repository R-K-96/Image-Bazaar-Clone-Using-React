
import React,{useState,useEffect} from "react";
import axios from 'axios';

function SearchImages({addImages}) {

    let [searchTerm,setSearchTerm] = useState("nature")

    // console.log("Access key:",process.env.REACT_APP_ACCESS_KEY);
    
    useEffect(() =>{
        getImages()
    },[])
    
    function getImages(){
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                client_id : process.env.REACT_APP_ACCESS_KEY,
                query : searchTerm
            }

        })
        .then(response => addImages(response.data.results))
        .catch(error =>console.log(error))
    }

    function reset(){
        setSearchTerm("")
    }

    


    return (
        <div className="input-container">
            <h1>Image Bazaar</h1>
            <input className="input" type="text" placeholder="Search" 
            onChange={event =>setSearchTerm(event.target.value)} 
            value={searchTerm}></input>

            <div className="btn">
            <button onClick={getImages}>Get Images</button>
            <button onClick={reset} >Reset</button>
            </div>
            <hr style={{color:"gray",width:"90%",border:"none",height:"1px",backgroundColor:"black"}}/>
        </div>
    )
}

export default SearchImages;