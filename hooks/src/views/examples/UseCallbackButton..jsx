import React from "react"

const UseCallbackButton = props=>{

    return(
        <div>
            <button className="btn" onClick={() => props.inc(6)}>+6</button>
            <button className="btn" onClick={() => props.inc(12)}>+12</button>
            <button className="btn" onClick={() => props.inc(16)}>+16</button>
        </div>
    )
}
export default React.memo(UseCallbackButton)//Cria uma cache e só ira rederixar o componente se as propriendades forem mudads