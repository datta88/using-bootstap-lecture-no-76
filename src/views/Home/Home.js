import React from "react";
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
export default function Home() {
    return (
        <>
            <div className="container p-5">
               
                <button className="btn btn-secondary">sayHello</button>
                <FontAwesomeIcon icon={faHome}/>
                <FontAwesomeIcon icon={faLightbulb} className="text-danger" />  
                
                     </div>
        </>
    )
}