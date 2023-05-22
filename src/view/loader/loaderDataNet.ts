import axios from 'axios';

export const loaderDataNet = async () => {

    const res = await axios.get("http://localhost:5183/WeatherForecast");
         
    //console.log("loaderDataNet", res.data);

    const respuestanet = res.data ;

    return { respuestanet };
};