import React from 'react'
import {DefaultInputPropsType} from '../c7-SuperRange/SuperRange';
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    value1: number
    value2: number
    onChangeValue1: (value: number) => void
    onChangeValue2: (value: number) => void
    // onChangeRange?: (value: [number, number]) => void
    // value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value1, value2, onChangeValue1, onChangeValue2, className, ...restProps
        //onChangeRange, value,
        // min, max, step, disable,
    }
) => {
    // сделать самому, можно подключать библиотеки



    return (
        <div className={s.container}>
            <input
                type={'range'}
                onChange={e => onChangeValue1(+e.currentTarget.value)}
                className={`${s.thumb} ${s.thumbLeft}`}
                value={value1}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                type={'range'}
                onChange={e => onChangeValue2(+e.currentTarget.value)}
                className={`${s.thumb} ${s.thumbRight}`}
                value={value2}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperDoubleRange
