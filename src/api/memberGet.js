import client from './client';

const memberGet = id => client.get(`/member/${id}`);

export default {
  memberGet,
};
