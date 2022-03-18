import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    key:number
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (t:number) => {
        props.deleteAffairCallback(t)
    }// need to fix

    return (
        <div key={props.key}>
            {props.affair.name} {props.affair.priority}

            <button onClick={()=>deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
