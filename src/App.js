import React,{useState,useEffect} from "react";
import SearchImages from "./components/SearchImages";
import DisplayImages from "./components/DisplayImages";
import './Style.css';


function App() {

  let [Images,setImages] = useState([])


  return (
   <div>
      
      <SearchImages addImages={setImages}/>
      <DisplayImages Images={Images}/>
    </div>
  );
}

export default App;
