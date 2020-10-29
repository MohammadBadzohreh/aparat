import request from 'utils/request';
export function getCommentApi() {
  const config = {
    method: 'get',
    url: `/comment`,
  };
  return request(config);
}