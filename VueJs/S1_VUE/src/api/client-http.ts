import type {AxiosInstance} from "axios";

import axios from "axios";

class ClientHTTP {
   private api:AxiosInstance;
   private apiKey: String= "4d567932";

   constructor(){
    this.api = axios.create({
        baseURL: 'https://www.omdapi.com',
        headers: {
            "Content-Type":"application/json"
        },
        params:{
            apikey:this.apiKey
        }
    })
   }

   getApi(){
    return this.api;
   }
}
export default new ClientHTTP().getApi();