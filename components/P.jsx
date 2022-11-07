import React from "react";
import css from './comp.module.css'

export function Text ({children}) {
    return (
        <p className= {css.P}>Это страница {children}</p>
    )
}