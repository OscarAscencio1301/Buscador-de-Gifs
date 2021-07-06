export const consumirAPI = async(elements) => {
    const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(elements)}&limit=16&api_key=YbOfrOPuWcAHW1lRBSYZxOD2E1bx6cu6`;

    const respuesta = await fetch(url)
    const {data} = await respuesta.json();
    const datos = data.map(imgs => ({
        id: imgs.id,
        title: imgs.title,
        url: imgs.images.downsized_medium.url
    }))
    return datos;
    
}