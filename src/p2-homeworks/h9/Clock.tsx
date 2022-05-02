import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)// stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new  Date)// setDate
        }, 100)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }

    const stringTime = 'Time'+ (date?(+ (date.getHours()< 10 ? '0' + date.getHours() : date.getHours())
        + ':' + (date.getMinutes()<10 ? '0' + date.getMinutes() : date.getMinutes())
        + ':' + (date.getSeconds()<10 ? '0' + date.getSeconds() : date.getSeconds()) ):'')
        // fix with date

    const stringDate = 'Date' + ' ' + (date?date.toISOString().slice(0, 10):'')// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
