const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4ba6d8e42b7265f22519897b2d441f85`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}