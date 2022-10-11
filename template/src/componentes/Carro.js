import React from "react";

export default function Carro(){
    const carro ={
        nome: "Fusca",
        cor: "Amarelo",
        ano: 1986,
        motorflex: "Não é flex" 
    }
    return(
        <>
            <h2>{carro.nome}</h2>
            <ul>
                <li>{carro.cor}</li>
                <li>Ano: {carro.ano}</li>
                <li>{carro.motorflex}</li>
            </ul>
        </>
    )
}