import client from './client';

const endpoint='/activation';

const getuserActivations = () =>client.get(endpoint);

export default{
    getuserActivations,
}