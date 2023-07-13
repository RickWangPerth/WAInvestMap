import { getToken } from './getToken';
import axios from 'axios';

export async function sendToken(url) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: [url],
        headers: { 
          'Authorization': 'Bearer ' + await getToken('accessToken'),
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

}
