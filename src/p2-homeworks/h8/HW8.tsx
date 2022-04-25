import React, {useState} from 'react'
import {checkAC, homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

// export type UserType =

export type man = {
    _id:number,
    name: string,
    age:number
}




const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 17},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<man>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: man) => (
        <div key={p._id}>
            <div style={{float:'left',width: '20%'}} >{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: ''}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div style={{float:'left'}}><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div style={{float:'left'}}><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div style={{float:'left'}}><SuperButton onClick={check}>check 18</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
