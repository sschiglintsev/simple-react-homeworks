import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number] | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const [value_range, setValue] = React.useState<number[]>(value ? value : [0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        onChangeHandler(newValue as number[])
    };
    const onChangeHandler = (arr:number[]) =>{
        onChangeRange && onChangeRange(arr)
    }

    return (
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'SuperDoubleRange'}
                    value={value?value:value_range}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                />
            </Box>
    )
}

export default SuperDoubleRange
