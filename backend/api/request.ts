import axios from 'axios'

export default axios.create({
    baseURL:"https://api.spotify.com/v1",
    headers:{
        'Authorization': `Bearer ${process.env.CLIENT_ID}`
    }
})