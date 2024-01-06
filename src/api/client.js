import {create} from 'apisauce';

// define the api
const apiClient = create({
  baseURL: 'http://192.168.100.47:8000',
  // headers: {
  //   'Content-Type': 'multipart/form-data',
  // },
  headers: {
    'X-API-KEY': '123',
    'X-MARKS-THE-SPOT': 'yarrrrr',
  },
});

export default apiClient;
