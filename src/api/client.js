import {create} from 'apisauce';
import authStorage from '../auth/storage';
// define the api
const apiClient = create({
  baseURL: 'http://192.168.0.100:9000',
  // baseURL: 'http://192.168.100.47:8000',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  // headers: {
  //   'X-API-KEY': '123',
  //   'X-MARKS-THE-SPOT': 'yarrrrr',
  // },
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers['Authorization'] = 'Bearer ' + authToken;
});

export default apiClient;
