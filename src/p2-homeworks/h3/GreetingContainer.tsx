import React, {useState} from 'react'
import Greeting from './Greeting'
import {log} from "util";

type GreetingContainerPropsType = {
    users: string // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    let [error, setError] = useState<any>(false)// need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        e.currentTarget.value=== " " ? setError(true):setName('')
        error=true
    }
    const addUser = () => {
        alert(`Hello  !`) // need to fix
    }

    const totalUsers = 0 // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
