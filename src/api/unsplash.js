import Axios from "axios";

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 78Abo3a-uQlgYkLeh2U24dAF9r450CsEKcH_xDbq0nw'
    }
})