import {man} from "../HW8";

export const homeWorkReducer = (state: Array<man>, action: homeWorkerReducerType) => { // need to fix any

    switch (action.type) {

        case 'sort': {
            if (action.payload === 'up') {
                const stateCopy = state.map(el => el).sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
                return stateCopy
            } else {
                const stateCopy = state.map(el => el).sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
                return stateCopy
            }
        }
        case 'check': {

            const stateCopy = state.filter(el => el.age > 18)
            return stateCopy
        }
        default:
            return state
    }
}

type homeWorkerReducerType = sortUpACType | sortDownACType | checkACType

type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: {
            sort: 'up'
        }
    }
}
type sortDownACType = ReturnType<typeof sortDownAC>
const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    }
}
type checkACType = ReturnType<typeof checkAC>
export const checkAC = () => {
    return {
        type: 'check',
        payload: {}
    }
}