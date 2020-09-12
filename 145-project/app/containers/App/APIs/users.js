import request from 'utils/request';
export function getFollowingsApi() {
  const config = {
    method: 'get',
    url: `user/followings`,
  };
  return request(config);
}

export function getFollowersApi() {
  const config = {
    method: 'get',
    url: `user/followers`,
  };
  return request(config);
}

export function unfollowChannnelApi(channel) {
  const config = {
    method: 'post',
    url: `user/${channel}/unfollow`,
  };
  return request(config);
}

export function followChannelApi(channel) {
  const config = {
    method: 'post',
    url: `user/${channel}/follow`,
  };
  return request(config);
}
