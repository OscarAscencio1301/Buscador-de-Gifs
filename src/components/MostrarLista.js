import React, { useState } from 'react'
import { consumirAPI } from '../helpers/consumirAPI';
import { useFetch } from '../hooks/useFetch';
import { Item } from './Item';

export const MostrarLista = ({elements}) => {
    // const [imagenes, setimagenes] = useState([])
    const {data, loading} = useFetch(elements);

    return (
        <div>
        {loading ? <h3 className="sub">Cargando...</h3> : null}
        <h3 className="titulo">{elements}</h3>
          <ol className="grid">
              {
                  data.map(imgs => 
                            <Item  
                                key={imgs.id}  
                                imagenes={imgs}/>)
              }
          </ol>
        </div>
    )
}
