import client from './client';

const memberAdd = obj => client.post('/member', obj);

export default {
  memberAdd,
};
