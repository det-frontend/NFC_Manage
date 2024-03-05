import client from './client';

const login = (email, password) =>
  client.post('/api/user/login', {email, password});

export default {
  login,
};
