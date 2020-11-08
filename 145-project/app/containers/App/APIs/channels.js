import request from 'utils/request';
export function getChannelStatiticsApi(range) {
  const config = {
    method: 'get',
    url: `/channel/statistics`,
    params:  range ,
  };
  return request(config);
}


export function channelInformationApi(name) {
  const config = {
    method: 'get',
    url: `/channel/${name}`,
  };
  return request(config);
}


