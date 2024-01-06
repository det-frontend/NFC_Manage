import client from './client';

const staffAdd = obj => client.post('/staff', obj);

export default {
  staffAdd,
};
