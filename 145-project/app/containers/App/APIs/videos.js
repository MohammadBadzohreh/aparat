import request from 'utils/request';

export function uploadFileApi(file, onUploadProgress) {
  const data = new FormData();
  data.append('video', file);
  const config = {
    method: 'post',
    url: '/video/upload',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
    onUploadProgress,
  };
  return request(config);
}

export function uploadBannerApi(banner) {
  const data = new FormData();
  data.append('banner', banner);
  const config = {
    method: 'post',
    url: '/video/upload-banner',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  };
  return request(config);
}

export function getVideoInfoApi(slug) {
  const config = {
    method: 'get',
    url: `/video/${slug}/view`,
  };
  return request(config);
}

export function getVideoStatisticsApi(slug, params) {
  const config = {
    method: 'get',
    url: `/video/${slug}/statistics`,
    params: { last_n_days: params },
  };
  return request(config);
}

export function getTagsApi() {
  const config = {
    method: 'get',
    url: '/tag',
  };
  return request(config);
}

export function getPlaylistApi() {
  const config = {
    method: 'get',
    url: '/playlist/my',
  };
  return request(config);
}

export function getMyVideosApi() {
  const config = {
    method: 'get',
    url: '/video',
  };
  return request(config);
}

export function getCategoriesApi() {
  const config = {
    method: 'get',
    url: '/category/all',
  };
  return request(config);
}

export function deleteVideoApi(slug) {
  const config = {
    method: 'delete',
    url: `/video/${slug}`,
  };
  return request(config);
}

export function createVideoApi(data) {
  const config = {
    method: 'post',
    url: '/video',
    data,
  };
  return request(config);
}

export function addTagApi(tag) {
  const config = {
    method: 'post',
    url: '/tag',
    data: { title: tag },
  };
  return request(config);
}

export function addPlaylistApi(title) {
  const config = {
    method: 'post',
    url: '/playlist/create',
    data: { title },
  };
  return request(config);
}

export function addCategoryApi(title) {
  const config = {
    method: 'post',
    url: '/category',
    data: { title },
  };
  return request(config);
}

export function updateVideoApi(slug, data) {
  const config = {
    method: 'put',
    url: `/video/${slug}/update`,
    data,
  };
  return request(config);
}
