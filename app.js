const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return `El cima en ${coordenadas.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(-17.4983291, -66.3327)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));




// let encodeUrl = encodeURI(argv.direccion);
// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
//     .then(resp => {
//         let location = resp.data.results[0];
//         let coordenadas = location.geometry.location;
//         console.log('Dirección: ', location.formatted_address);
//         console.log('Latitud: ', coordenadas.lat);
//         console.log('Longitud ', coordenadas.lng);
//         // console.log(JSON.stringify(resp.data, undefined, 2));
//     })
//     .catch(e => console.log('ERROR!!!', e));