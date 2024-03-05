import client from './client';

const StaffGet = id => client.get(`/api/nfc-card/member/${id}`);

export default {
  StaffGet,
};
