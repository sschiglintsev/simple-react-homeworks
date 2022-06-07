import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./api/RequestsAPI";
import {Simulate} from "react-dom/test-utils";

export const Request = () => {

    const [success, setSuccess] = useState(false)

    const onChangeChecked = (value: boolean) => {
        setSuccess(value)
    }

    const onClickHandler = () => {
        requestAPI.post(success)
            .then(response => {
                console.log(response)
            })
            .catch(reject =>{
                console.log({...reject});
                console.log(reject.response ? reject.response.data.errorText : reject.message);
            })

    }

    return (
        <div>
            <SuperCheckbox onChangeChecked={onChangeChecked}/>
            <SuperButton onClick={onClickHandler}>POST</SuperButton>
        </div>
    );
};

export default Request
