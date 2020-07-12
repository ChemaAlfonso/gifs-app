export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=p6vD8N2C8x98BRwq6YAtDw1AT5lwz5Fs&q=${ encodeURI( category ) }&limit=10`;
    const resp = await fetch( url );
    const {data, meta} = await resp.json();

    if( meta.status !== 200 ) return [];

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;
}