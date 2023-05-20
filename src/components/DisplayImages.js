import React,{useState,useEffect} from "react";


function DisplayImages({Images}) {

    return(
        <div className="main-container">
            {
                Images.map((img,index)=>{

                    return(
                        <img key={index} src={img.urls.small_s3} alt={img.alt_description}
                           ></img>
                    )
                })
            }
        </div>
    )
}

export default DisplayImages;