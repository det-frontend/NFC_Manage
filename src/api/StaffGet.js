import client from './client';

const StaffGet = id => client.get(`/staff/${id}`);

export default {
  StaffGet,
};
