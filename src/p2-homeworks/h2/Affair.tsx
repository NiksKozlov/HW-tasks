import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div>
            <span className={s.item}>{props.affair.name} </span>
            <span className={s.priorityClass}>priority: {props.affair.priority} </span>
            <SuperButton className={s.button} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
