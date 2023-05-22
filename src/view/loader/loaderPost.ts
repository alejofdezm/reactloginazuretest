import axios from 'axios';
import { loaderDataNet } from "./loaderDataNet";

export const loaderPost = async ({ params }) => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    
    const post = res.data ;

    const  respuestanet = loaderDataNet();
    respuestanet.then(function(result) {
            
         console.log(result.respuestanet) // "Some User token
        
        }) ;

    return { post };
};