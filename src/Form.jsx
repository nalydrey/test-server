import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import axios from "axios";
import {logDOM} from "@testing-library/react";

const initialForm = {
    lastName: '',
    firstName: '',
    age: ''
}
const Form = (props) => {



    const {open, close, isOpen, getData} = props

    const [field, setField] = useState(initialForm)



    const handleCreate = () => {
        fetch('api/users', {
            body: JSON.stringify(field),
            method: 'POST',
            headers: {'Content-type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(json => getData(json))
    }

    const fillField = (e) => {
        console.log(e.target.name)
        setField({...field, [e.target.name]: e.target.value})
    }

    const cancel = () => {
        console.log(initialForm)
        setField(initialForm)
        close()
    }

    return (
        <Dialog
            open={isOpen}
            keepMounted
            onClose={cancel}
        >
            <DialogTitle>{"Заполните пустые поля"}</DialogTitle>
            <div className={'dialog__content'}>
                <TextField
                    value={field.lastName}
                    onChange={fillField}
                    name={'lastName'}
                    label="Введите фамилию"
                    variant="standard"
                />
                <TextField
                    value={field.firstName}
                    onChange={fillField}
                    name={'firstName'}
                    label="Введите Имя"
                    variant="standard"
                />
                <TextField
                    value={field.age}
                    onChange={fillField}
                    name={'age'}
                    label="Введите возраст"
                    variant="standard"
                />
            </div>
            <DialogActions>
                <Button onClick={handleCreate}>Создать</Button>
                <Button onClick={cancel}>Отменить</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Form;