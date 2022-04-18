import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

const Affair: React.FC<AffairPropsType>=({affair, deleteAffairCallback, ...restProps}) =>{
    const deleteCallback = (t: number) => {
        deleteAffairCallback(t)
    }// need to fix

    return (
        <div key={affair._id}>
            {affair.name} {affair.priority}
            <SuperButton onClick={() => deleteCallback(affair._id)}>x</SuperButton>
        </div>
    )
}

export default Affair
