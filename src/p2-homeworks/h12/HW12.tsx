import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, initialThemeType} from "./bll/themeReducer";


function HW12() {
    const theme = useSelector<AppStoreType, initialThemeType>(state => state.theme,);
    const valueTheme = theme.valueTheme

    const dispatch = useDispatch()
    const onChangeOption =(value:string)=> {
        dispatch(changeThemeAC(value))
    }


    return (
        <div className={s[valueTheme]}>
            <hr/>
            <span className={s[valueTheme + '-text']}>
                homeworks 12
                <SuperRadio
                    name={'radio'}
                    options={theme.themes}
                    value={valueTheme}
                    onChangeOption={onChangeOption}
                />
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
