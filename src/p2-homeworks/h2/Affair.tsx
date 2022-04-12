import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    key: number
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (t: number) => {
        props.deleteAffairCallback(t)
    }// need to fix

    return (
        <div key={props.key}>
            {props.affair.name} {props.affair.priority}
            <SuperButton onClick={() => deleteCallback(props.affair._id)}>x</SuperButton>
        </div>
    )
}

export default Affair
