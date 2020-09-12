/*
 *
 * App actions
 *
 */

import {
  ERROR_HAPPEN,
  ERROR_CLEAR,
  DRAWER_OPEN,
  FILE_UPLOAD,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAIL,
  GET_TAGS,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAIL,
  GET_CATEGORIS,
  GET_CATEGORIS_SUCCESS,
  GET_CATEGORIS_FAIL,
  ADD_TAG,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAIL,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
  ADD_PLAY_LIST,
  GET_PLAY_LIST_FAIL,
  GET_PLAY_LIST,
  GET_PLAY_LIST_SUCCESS,
  ADD_PLAY_LIST_SUCCESS,
  ADD_PLAY_LIST_FAIL,
  GET_UPLOAD_PERCENT,
  CREATE_VIDEO_SUCCESS,
  CREATE_VIDEO,
  CREATE_VIDEO_FAIL,
  UPLOAD_BANNER,
  UPLOAD_BANNER_SUCCESS,
  UPLOAD_BANNER_FAIL,
  GET_MY_VIDEOS,
  GET_MY_VIDEOS_SUCCESS,
  GET_MY_VIDEOS_FAIL,
  DELETE_VIDEO,
  DELETE_VIDEO_SUCCESS,
  DELETE_VIDEO_FAIL,
  HIDE_DELETE_VIDEO_ERROR,
  CLEAR_VIDEO_DATA,
  GET_VIDEO_INFO,
  GET_VIDEO_INFO_SUCCESS,
  GET_VIDEO_INFO_FAIL,
  CLEAR_VIDEO_INFO,
  UPDATE_VIDEO,
  UPDATE_VIDEO_SUCCESS,
  UPDATE_VIDEO_FAIL,
  CLEAR_UPDATED_VIDEO,
  GET_VIDEO_STATISTICS,
  GET_VIDEO_STATISTICS_SUCCESS,
  GET_VIDEO_STATISTICS_FAIL,
  GET_FOLLOWINGS_LIST,
  GET_FOLLOWINGS_LIST_SUCCESS,
  GET_FOLLOWINGS_LIST_FAIL,
  UNFOLLOW_CHANNEL_SUCCESS,
  UNFOLLOW_CHANNEL,
  UNFOLLOW_CHANNEL_FAIL,
  GET_FOLLOWER_LIST,
  GET_FOLLOWER_LIST_SUCCESS,
  GET_FOLLOWER_LIST_FAIL,
  FOLLOW_CHANNEL,
  FOLLOW_CHANNEL_SUCCESS,
  FOLLOW_CHANNEL_FAIL,
} from './constants';

export function errorHappenAction(error) {
  return {
    type: ERROR_HAPPEN,
    error,
  };
}

export function errorClearAction() {
  return {
    type: ERROR_CLEAR,
  };
}

export function drawerToggleAction(show) {
  return {
    type: DRAWER_OPEN,
    show,
  };
}

export function fileUploadAction(file) {
  return {
    type: FILE_UPLOAD,
    file,
  };
}

export function fileUploadSuccessAction(data) {
  return {
    type: FILE_UPLOAD_SUCCESS,
    data,
  };
}

export function fileUploadFailAction(error) {
  return {
    type: FILE_UPLOAD_FAIL,
    error,
  };
}

export function bannerUploadAction(banner) {
  return {
    type: UPLOAD_BANNER,
    banner,
  };
}

export function bannerUploadSuccessAction(data) {
  return {
    type: UPLOAD_BANNER_SUCCESS,
    data,
  };
}

export function bannerUploadFailAction(error) {
  return {
    type: UPLOAD_BANNER_FAIL,
    error,
  };
}

export function createVideoAction(information) {
  return {
    type: CREATE_VIDEO,
    information,
  };
}

export function createVideoActionSuccessAction(data) {
  return {
    type: CREATE_VIDEO_SUCCESS,
    data,
  };
}

export function createVideoActionFailAction(error) {
  return {
    type: CREATE_VIDEO_FAIL,
    error,
  };
}

// =====

export function updateVideoAction(slug, params) {
  return {
    type: UPDATE_VIDEO,
    slug,
    params,
  };
}

export function updateVideoSuccessAction(data) {
  return {
    type: UPDATE_VIDEO_SUCCESS,
    data,
  };
}

export function updateVideoFailAction(error) {
  return {
    type: UPDATE_VIDEO_FAIL,
    error,
  };
}

// =====
export function clearVideoInfoAction() {
  return {
    type: CLEAR_VIDEO_INFO,
  };
}

export function getVideoInfoAction(slug) {
  return {
    type: GET_VIDEO_INFO,
    slug,
  };
}

export function getVideoInfoSuccessAction(data) {
  return {
    type: GET_VIDEO_INFO_SUCCESS,
    data,
  };
}

export function getVideoInfoFailAction(error) {
  return {
    type: GET_VIDEO_INFO_FAIL,
    error,
  };
}

export function clearVideoDataAction() {
  return {
    type: CLEAR_VIDEO_DATA,
  };
}

export function deleteVideoAction(slug) {
  return {
    type: DELETE_VIDEO,
    slug,
  };
}

export function deleteVideoSuccessAction(data) {
  return {
    type: DELETE_VIDEO_SUCCESS,
    data,
  };
}

export function deleteVideoFailAction(error) {
  return {
    type: DELETE_VIDEO_FAIL,
    error,
  };
}

export function hideDeleteVideoAction() {
  return {
    type: HIDE_DELETE_VIDEO_ERROR,
  };
}

export function getMyVideosAction(params) {
  return {
    type: GET_MY_VIDEOS,
    params,
  };
}

export function getMyVideosSuccessAction(data) {
  return {
    type: GET_MY_VIDEOS_SUCCESS,
    data,
  };
}

export function getMyVideosFailAction(error) {
  return {
    type: GET_MY_VIDEOS_FAIL,
    error,
  };
}

// =========

export function getVideosStatisticsAction(slug, params) {
  return {
    type: GET_VIDEO_STATISTICS,
    slug,
    params,
  };
}

export function getVideosStatisticsSuccessAction(data) {
  return {
    type: GET_VIDEO_STATISTICS_SUCCESS,
    data,
  };
}

export function getVideosStatisticsFailAction(error) {
  return {
    type: GET_VIDEO_STATISTICS_FAIL,
    error,
  };
}

export function clearUpdatedVideoAction() {
  return {
    type: CLEAR_UPDATED_VIDEO,
  };
}

export function getFileUploadedePercentAction(percent) {
  return {
    type: GET_UPLOAD_PERCENT,
    percent,
  };
}

export function getTagsAction() {
  return {
    type: GET_TAGS,
  };
}

export function getTagsSuccessAction(data) {
  return {
    type: GET_TAGS_SUCCESS,
    data,
  };
}

export function getTagsFailAction(error) {
  return {
    type: GET_TAGS_FAIL,
    error,
  };
}
export function getCategoriesAction() {
  return {
    type: GET_CATEGORIS,
  };
}

export function getCategoriesSuccessAction(data) {
  return {
    type: GET_CATEGORIS_SUCCESS,
    data,
  };
}

export function getCategoriesFailAction(error) {
  return {
    type: GET_CATEGORIS_FAIL,
    error,
  };
}

export function addTagAction(tag) {
  return {
    type: ADD_TAG,
    tag,
  };
}

export function addTagSuccessAction(data) {
  return {
    type: ADD_TAG_SUCCESS,
    data,
  };
}

export function addTagFailAction(error) {
  return {
    type: ADD_TAG_FAIL,
    error,
  };
}

export function addCategoryAction(title) {
  return {
    type: ADD_CATEGORY,
    title,
  };
}

export function addCategorySuccessAction(data) {
  return {
    type: ADD_CATEGORY_SUCCESS,
    data,
  };
}

export function addCategoryFailAction(error) {
  return {
    type: ADD_CATEGORY_FAIL,
    error,
  };
}

export function getPlaylistAction() {
  return {
    type: GET_PLAY_LIST,
  };
}
export function getPlaylistSuccessAction(data) {
  return {
    type: GET_PLAY_LIST_SUCCESS,
    data,
  };
}

export function getPlaylistFailAction(error) {
  return {
    type: GET_PLAY_LIST_FAIL,
    error,
  };
}

export function addPlaylistAction(title) {
  return {
    type: ADD_PLAY_LIST,
    title,
  };
}

export function addPlaylistSuccessAction(data) {
  return {
    type: ADD_PLAY_LIST_SUCCESS,
    data,
  };
}

export function addPlaylistFailAction(error) {
  return {
    type: ADD_PLAY_LIST_FAIL,
    error,
  };
}

export function getFollowingsListAction() {
  return {
    type: GET_FOLLOWINGS_LIST,
  };
}

export function getFollowingsListSuccessAction(data) {
  return {
    type: GET_FOLLOWINGS_LIST_SUCCESS,
    data,
  };
}

export function getFollowingsListFailAction(error) {
  return {
    type: GET_FOLLOWINGS_LIST_FAIL,
    error,
  };
}

// followers

export function getFollowersListAction() {
  return {
    type: GET_FOLLOWER_LIST,
  };
}

export function getFollowersListSuccessAction(data) {
  return {
    type: GET_FOLLOWER_LIST_SUCCESS,
    data,
  };
}

export function getFollowersListFailAction(error) {
  return {
    type: GET_FOLLOWER_LIST_FAIL,
    error,
  };
}

// UNFLLOW

export function unfollowChannelAction(channel) {
  return {
    type: UNFOLLOW_CHANNEL,
    channel,
  };
}

export function unfollowChannelSuccessAction(data) {
  return {
    type: UNFOLLOW_CHANNEL_SUCCESS,
    data,
  };
}

export function unfollowChannelFailAction(error) {
  return {
    type: UNFOLLOW_CHANNEL_FAIL,
    error,
  };
}

export function followChannelAction(channel) {
  return {
    type: FOLLOW_CHANNEL,
    channel,
  };
}

export function followChannelSuccessAction(data) {
  return {
    type: FOLLOW_CHANNEL_SUCCESS,
    data,
  };
}

export function followChannelFailAction(error) {
  return {
    type: FOLLOW_CHANNEL_FAIL,
    error,
  };
}
