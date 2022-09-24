import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div>
            <div className={s.error}>404</div>
            <div className={s.error}>Page not found :c</div>
        </div>
    )
}

export default Error404
