import request from 'utils/request';

export function loginApi({ username, password }) {
  const config = {
    method: 'post',
    url: '/login',
    data: {
      username,
      password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'L3gh7hZPsF0b2FygIje2IIWiXdmrK3vYsFUjroAX',
    },
  };

  return request(config);
}
