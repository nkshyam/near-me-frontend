import React from "react";

import wonder1 from "../assets/images/wond-img1.jpg"
import wonder2 from "../assets/images/wond-img2.jpg"
import wonder3 from "../assets/images/wond-img3.jpg"

export default function Wonder (){
    return(
        <div className="w-full my-2 flex gap-2">
            <div className="w-[38%]">
                <img src={wonder1} alt="wonde1" />
            </div>
            <div className="w-[28%]">
                <img src={wonder2} alt="wonder2" />
            </div>
            <div className="w-[28%]">
                <img src={wonder3} alt="wonder3" />
            </div>
        </div>
    )
}