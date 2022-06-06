import {type} from "os";

const CHANGE_THEME = 'CHANGE-THEME'

export type initialThemeType = {
    valueTheme: string,
    themes: string[],
}

const initState: initialThemeType = {
    valueTheme: 'some',
    themes: ['dark','red','some']
};

export const themeReducer = (state = initState, action: changeThemeACType): initialThemeType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, valueTheme:action.value};
        }
        default:
            return state;
    }
};

type changeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (value: string) => {
    return {
        type: CHANGE_THEME,
        value
    } as const
}; // fix any