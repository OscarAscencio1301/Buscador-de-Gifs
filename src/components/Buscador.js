import React, { useState } from 'react'

export const Buscador = ({setelementos}) => {
    const [valor, setvalor] = useState("")
    const cambioInput = (e) =>{
        setvalor(e.target.value)
        console.log("Se cambio el input")
    }
    const validarInput = (e) =>{
        e.preventDefault();
        setelementos(elementos => [valor,...elementos])
        setvalor("");
        console.log("Se activo el Submit")
    }
    return (
       
        <form onSubmit={validarInput}>
            <input 
                type="text"
                onChange={cambioInput}
                placeholder="Buscar..."
                value={valor}
            />
        </form>
      
    )
}
