import React from "react"
import { useState } from "react"
import { accordionData } from "../utils/content"
import '../style-sheets/Accordion.css'

const Accordion = () =>{

    const [selected,setSelected] = useState(null)
    const toggle = (i)=>{
        if( selected === i){
        return setSelected(null)
        }
        setSelected(i)
    }

return (
    <div className="wrapper">
        <div className="accordion">
            {accordionData.map((item,i) =>
            (
                <div className="item">
                    <div className="title" onClick={()=> toggle(i)}>
                          <h2>{item.title}</h2>
                          <span>{selected === i ? '-' : '+' }</span>
                     </div>
                     <div className={ selected === i? "content-show":"content"}><u>{item.content}</u></div>
                     
                </div>
            )
            )}

        </div>
    </div>
)
}

export default Accordion