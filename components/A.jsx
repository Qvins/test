import React from "react";
import css from './comp.module.css'

export function A() {
    return (
        [
        <p><a className= {css.A} href = "http://localhost:3000">Станица "index.jsx"</a></p>,
        <p><a className= {css.A} href = "http://localhost:3000/login">Станица "login.jsx"</a></p>,
        <p><a className= {css.A} href = "http://localhost:3000/home">Станица "home.jsx"</a></p>,
        ]
    )
}