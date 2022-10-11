import React from "react"
import Carro from "./Carro";

export default function Garagem(){
    const nome = "Aline"
    return (
        <>
        <h1>Garagem de {nome}</h1>
        <Carro/>
        <Carro/>
        <Carro/>
        <Carro/>
        </>
    )
}