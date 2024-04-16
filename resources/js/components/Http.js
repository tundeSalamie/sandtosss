import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8000/api",
    headers:{
        "Content-type":"application/json",
        "Accept": "application/json",
        //"Access-Control-Allow-Origin": "*",
        //"Access-Control-Allow-Credentials": "true",
        //"Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
})



// headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');

//         headers.append('Access-Control-Allow-Origin', '*');
//         headers.append('Access-Control-Allow-Credentials', 'true');
//         headers.append('Access-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS');