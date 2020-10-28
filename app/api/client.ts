import { create } from 'apisauce';

// define the api
const apiClient = create({
  baseURL: 'https://skygatesonlineacademy.com/api/v1',
});

export default apiClient;