import React from "react";
import Config from '../util/config.json'
import './About.css'
import { config } from "@fortawesome/fontawesome-svg-core";

function Home() {
    return (
        <>
            <div className="container" style={{ backgroundColor: Config.thim.accentColor }}>
                <h1 className="text-center " >{Config.title}</h1>
                <p className="text-center" >{Config.discription}</p>

                <h2 className="text-center" >Services</h2>
                <div className="flex" style={{maxWidth: config.flex}}>
                                {
                    Config.servicess.map((servicessData, index) => {
                        const { title, discription, price } = servicessData
                        return (

                            <div className="card m-3 " key={index}>
                                <div className="flex">
                                    <div className="card-body   " >
                                        <h3 className="" style={{ color: Config.thim.primeryColor }} >{title}</h3>
                                        <p className="" style={{ color: Config.thim.dangerColor }}>{discription}</p>
                                        <p className="" style={{ color: Config.thim.skayColor }}>Price : {price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}
export default Home 