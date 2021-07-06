import React, { useState } from 'react'

export const Buscador = ({setelementos}) => {
    const [valor, setvalor] = useState("")
    const cambioInput = (e) =>{
        setvalor(e.target.value)
    }
    const validarInput = (e) =>{
        e.preventDefault();
        setelementos(elementos => [valor,...elementos])
        setvalor("");
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
