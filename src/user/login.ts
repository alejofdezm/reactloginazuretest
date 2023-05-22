
import { auth, config } from '../context/configlogin';
import axios from 'axios';

const params = new URLSearchParams();

params.append('client_id', config.auth.clientId);
params.append('scope', "openid offline_access 57025c21-ab83-4720-9115-94073d61ad99/.default");
params.append('grant_type', 'password');


const logInWithEmailAndPassword = async (email, password) => {   
  console.log(email, password, auth) 

  params.append('username', email);
  params.append('password', password);
  params.append('client_secret', config.auth.clientSecret);

  return axios.post(config.auth.authority, params);
   /* return auth.acquireTokenByUsernamePassword(
              {
                scopes: ["openid offline_access 57025c21-ab83-4720-9115-94073d61ad99/.default"],
                username: email,
                password: password
            }
            );*/

  };

  export default logInWithEmailAndPassword;