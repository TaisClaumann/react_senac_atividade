import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const fetchViaCepUser = (username: string)  => {
   return apiClient.get<any>(`https://viacep.com.br/ws/${username}/json/`);
}