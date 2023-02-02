import axios from "axios";


export default axios.create({
    baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api-docs/#/Product/get_products",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

