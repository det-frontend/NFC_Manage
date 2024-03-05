import client from './client';

const memberGet = id => client.get(`api/user`);

export default {
  memberGet,
};
