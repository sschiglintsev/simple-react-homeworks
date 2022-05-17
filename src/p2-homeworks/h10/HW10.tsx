import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitialStateType, loadingAC} from "./bll/loadingReducer";
import style from './H10.module.css'

function HW10() {
    let {loading} = useSelector<AppStoreType, InitialStateType>(state => state.loading)

    const dispatch = useDispatch()
    //const loading = false

    const setLoading = () => {
        dispatch(loadingAC(true))
        // dispatch
        // setTimeout
        console.log('loading true')

        setTimeout(() => {
            dispatch(loadingAC(false))
            console.log('loading false')
        }, 2000)

    };
    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {
                loading
                    ? (
                        <div className={style.loader}>Loading...</div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
