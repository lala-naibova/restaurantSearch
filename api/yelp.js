import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization :'Bearer NdMuZiDI893MMSI1t2qW51EAzDRxxv89caNba524o5j1twa1U2NWZ-LcmxLy5Qt-RYjwCBU29nmeDNXab-iXHg9kc4wPR7K5Opkit_3Hcv99F3UutDClzoCl4lWGXnYx'
    }
})