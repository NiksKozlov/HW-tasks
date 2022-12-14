import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
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
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value.length < 1) {              // need to fix
            setName('')
            setError('Please enter a valid name')
        } else {
            setName(e.currentTarget.value)
            setError('')
        }

    }
    const addUser = () => {
        if (name.trim() !== '') {
            alert(`Hello ${name.trim()}!`)// need to fix
            addUserCallback(name)
            setName('')
        } else {
            setError('Please enter a valid name!')
            setName('')
        }
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addUser()
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
