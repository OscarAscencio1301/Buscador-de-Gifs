import React, { useEffect, useState } from 'react'
import { consumirAPI } from '../helpers/consumirAPI'

export const useFetch = (elemento) => {
  const [datos, setdatos] = useState({
      data: [],
      loading: true
  })
  
  useEffect(() => {
    consumirAPI(elemento)
    .then(imgs => {
        setTimeout(() => {
            setdatos({
                data: imgs,
                loading: false
            })

        }, 100);
})


}, [])

  return datos;
}
