import request from 'utils/request';
export function getCommentApi() {
  const config = {
    method: 'get',
    url: `/comment`,
  };
  return request(config);
}


export function addCommentApi(params) {
  const config = {
    method: 'post',
    url: `/comment`,
    data: params,
  };
  return request(config);
}



