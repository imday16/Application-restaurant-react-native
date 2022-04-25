import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nP12gmThnwp0O1VUI9r6jvdxbyqKjDJjo1olaeH2JBLMPOu8KU4EkfP5mmmiGkBzCGB2G9TCz5G7lsl29Zzc3A1XX4AvZ-JJMJqUeHVUXU9YAD4ifanDAc1rLWlhYnYx'

    }

})