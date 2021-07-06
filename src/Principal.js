import React, { useState } from 'react'
import { Buscador } from './components/Buscador'
import { MostrarLista } from './components/MostrarLista'

export const Principal = () => {
    const [elementos, setelementos] = useState(["Batman"])
    return (
        <div>
            <h1>Buscador de Imágenes</h1>
            <Buscador setelementos={setelementos}/>
            <hr />
            <ol>
               {
                   elementos.map(elements => 
                    <MostrarLista
                            key={elements} 
                            elements={elements}/>
                   )}
            </ol>
        </div>
    )
}
