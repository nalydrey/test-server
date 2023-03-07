import {Button, Dialog, DialogActions, DialogTitle, Slide} from "@mui/material";
import UserCard from "./UserCard";
import {useEffect, useState} from "react";
import axios from "axios";
import Form from "./Form";

// export const url = 'https://127.0.0.1:3001/'
// export const url =''
// "homepage":"https://nalydrey.github.io/test-server/",
// "proxy": "http://localhost:3001",

function App() {

    const [users, setUsers] = useState([])

    const [isOpen, setIsOpen] = useState(false)

    const handleCancel = () => {
        setIsOpen(false)
    }
    const openForm = () => {
        setIsOpen(true)
    }


    useEffect(()=>{
        axios.get('http://127.0.0.1:3001/api/users')
            .then(resp => setUsers(resp.data))
    },[])

    const getUsers = (data) =>{
        setUsers(data)
    }



  return (
    <div className="container">
        <div className="head">
            <Button
              variant={'outlined'}
              onClick={openForm}
            >
              Создать нового пользователя
            </Button>
            <h1>Список пользователей</h1>
        </div>
        <div className={'box'}>
            {users.map((user, index)=>
                <UserCard
                    key = {index}
                    id = {user.id}
                    lastName = {user.lastName}
                    firstName ={user.firstName}
                    age = {user.age}
                    getData = {getUsers}
                />
            )}
        </div>
        <Form
            open = {openForm}
            close = {handleCancel}
            isOpen= {isOpen}
            getData = {getUsers}
        />

    </div>

  );
}

export default App;
