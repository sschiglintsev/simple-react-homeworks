import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    let [error, setError] = useState<boolean>(false)// need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value === " ") {
            setError(true)
        } else {
            setName(e.currentTarget.value)
            setError(false)
        }

        // e.currentTarget.value=== " " ? setError(true):setName(e.currentTarget.value)
        // setError(false)
    }

    const addUser = () => {
        addUserCallback(name)
        setName('')
        alert(`Hello  '${name}'!`)
        // need to fix
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error ? 'error, add name' : ''}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
