const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }
    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coordenadas.lat,
        longitud: coordenadas.lng
    }

}

module.exports = {
    getLugarLatLng
}