import axios from "axios";

const BASE_URL = "https://apipanel.performa.nz/api/"

export const ENDPOINTS = {
    SPORCULAR: 'Sporcular/',
    UYRUKLAR: 'Uyruklar/',
    YABANCIDILLER: 'YabanciDiller/',
    SPORCUBILGILER: 'Sporcular/GetSporcuAllData/',
    YABANCIDILLERTOPLU:'YabanciDiller/SaveRange/',
}

export const createdAPIEndpoint = endpoint => {

    // let url = BASE_URL + endpoint + '/';
    let url = BASE_URL + endpoint;
    console.log(url)
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        fetchByName: name => axios.get(url + name),
        create: newRecord => axios.post(url, newRecord),
        createRange: newRecord => axios.post(url, newRecord),
        update: (updatedRecord) => axios.put(url, updatedRecord),
        delete: id => axios.delete(url + id),

    }


}