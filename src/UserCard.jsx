import React from 'react';
import {IconButton} from "@mui/material";
import {DeleteForever, Edit, Fingerprint} from "@mui/icons-material";
import axios from "axios";
import { url } from './App'


function DeleteIcon() {
    return null;
}

const UserCard = (props) => {

    const {id, lastName, firstName, age, getData } = props

    const deleteUser = () => {
        console.log(id)
        axios.delete(`http://127.0.0.1:3001/test-server/api/users/${id}`)
            .then(resp => getData(resp.data))
    }

    return (
        <div className={'user'}>
            <div className={'user__content'}>
                <ul>
                    <li>
                        <p>Фамилия</p>
                        <p>{lastName}</p>
                    </li>
                    <li>
                        <p>Имя</p>
                        <p>{firstName}</p>
                    </li>
                    <li>
                        <p>Возраст</p>
                        <p>{age}</p>
                    </li>
                </ul>
            </div>
            <div className={'user__action'}>
                <IconButton color='primary'>
                    <Edit />
                </IconButton>
                <IconButton
                    sx={{color: 'red'}}
                    onClick={deleteUser}
                >
                    <DeleteForever />
                </IconButton>
            </div>

        </div>
    );
};

export default UserCard;