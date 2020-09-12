/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ERROR_HAPPEN = 'app/App/ERROR_HAPPEN';
export const ERROR_CLEAR = 'app/App/ERROR_CLEAR';
export const DRAWER_OPEN = 'app/App/DRAWER_OPEN';

export const FILE_UPLOAD = 'app/App/FILE_UPLOAD';
export const FILE_UPLOAD_SUCCESS = 'app/App/FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_FAIL = 'app/App/FILE_UPLOAD_FAIL';
export const GET_UPLOAD_PERCENT = 'app/App/GET_UPLOAD_PERCENT';

export const UPLOAD_BANNER = 'app/App/UPLOAD_BANNER';
export const UPLOAD_BANNER_SUCCESS = 'app/App/UPLOAD_BANNER_SUCCESS';
export const UPLOAD_BANNER_FAIL = 'app/App/UPLOAD_BANNER_FAIL';

export const CREATE_VIDEO = 'app/App/CREATE_VIDEO';
export const CREATE_VIDEO_SUCCESS = 'app/App/CREATE_VIDEO_SUCCESS';
export const CREATE_VIDEO_FAIL = 'app/App/CREATE_VIDEO_FAIL';

export const UPDATE_VIDEO = 'app/App/UPDATE_VIDEO';
export const UPDATE_VIDEO_SUCCESS = 'app/App/UPDATE_VIDEO_SUCCESS';
export const UPDATE_VIDEO_FAIL = 'app/App/UPDATE_VIDEO_FAIL';

export const CLEAR_VIDEO_INFO = 'app/App/CLEAR_VIDEO_INFO';

export const GET_VIDEO_INFO = 'app/App/GET_VIDEO_INFO';
export const GET_VIDEO_INFO_SUCCESS = 'app/App/GET_VIDEO_INFO_SUCCESS';
export const GET_VIDEO_INFO_FAIL = 'app/App/GET_VIDEO_INFO_FAIL';

export const GET_VIDEO_STATISTICS = 'app/App/GET_VIDEO_STATISTICS';
export const GET_VIDEO_STATISTICS_SUCCESS =
  'app/App/GET_VIDEO_STATISTICS_SUCCESS';
export const GET_VIDEO_STATISTICS_FAIL = 'app/App/GET_VIDEO_STATISTICS_FAIL';

export const CLEAR_VIDEO_DATA = 'app/App/CLEAR_VIDEO_DATA';

export const CLEAR_UPDATED_VIDEO = 'app/App/CLEAR_UPDATED_VIDEO';

export const DELETE_VIDEO = 'app/App/DELETE_VIDEO';
export const DELETE_VIDEO_SUCCESS = 'app/App/DELETE_VIDEO_SUCCESS';
export const DELETE_VIDEO_FAIL = 'app/App/DELETE_VIDEO_FAIL';

export const HIDE_DELETE_VIDEO_ERROR = 'app/App/HIDE_DELETE_VIDEO_ERROR';

export const GET_MY_VIDEOS = 'app/App/GET_MY_VIDEOS';
export const GET_MY_VIDEOS_SUCCESS = 'app/App/GET_MY_VIDEOS_SUCCESS';
export const GET_MY_VIDEOS_FAIL = 'app/App/GET_MY_VIDEOS_FAIL';

export const GET_TAGS = 'app/App/GET_TAGS';
export const GET_TAGS_SUCCESS = 'app/App/GET_TAGS_SUCCESS';
export const GET_TAGS_FAIL = 'app/App/GET_TAGS_FAIL';

export const GET_CATEGORIS = 'app/App/GET_CATEGORIS';
export const GET_CATEGORIS_SUCCESS = 'app/App/GET_CATEGORIS_SUCCESS';
export const GET_CATEGORIS_FAIL = 'app/App/GET_CATEGORIS_FAIL';

export const GET_FOLLOWINGS_LIST = 'app/App/GET_FOLLOWINGS_LIST';
export const GET_FOLLOWINGS_LIST_SUCCESS =
  'app/App/GET_FOLLOWINGS_LIST_SUCCESS';
export const GET_FOLLOWINGS_LIST_FAIL = 'app/App/GET_FOLLOWINGS_LIST_FAIL';

export const GET_FOLLOWER_LIST = 'app/App/GET_FOLLOWER_LIST';
export const GET_FOLLOWER_LIST_SUCCESS = 'app/App/GET_FOLLOWER_LIST_SUCCESS';
export const GET_FOLLOWER_LIST_FAIL = 'app/App/GET_FOLLOWER_LIST_FAIL';

export const UNFOLLOW_CHANNEL = 'app/App/UNFOLLOW_CHANNEL';
export const UNFOLLOW_CHANNEL_SUCCESS = 'app/App/UNFOLLOW_CHANNEL_SUCCESS';
export const UNFOLLOW_CHANNEL_FAIL = 'app/App/UNFOLLOW_CHANNEL_FAIL';

export const FOLLOW_CHANNEL = 'app/App/FOLLOW_CHANNEL';
export const FOLLOW_CHANNEL_SUCCESS = 'app/App/FOLLOW_CHANNEL_SUCCESS';
export const FOLLOW_CHANNEL_FAIL = 'app/App/FOLLOW_CHANNEL_FAIL';

export const ADD_TAG = 'app/App/ADD_TAG';
export const ADD_TAG_SUCCESS = 'app/App/ADD_TAG_SUCCESS';
export const ADD_TAG_FAIL = 'app/App/ADD_TAG_FAIL';

export const ADD_CATEGORY = 'app/App/ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'app/App/ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAIL = 'app/App/ADD_CATEGORY_FAIL';

export const GET_PLAY_LIST = 'app/App/GET_PLAY_LIST';
export const GET_PLAY_LIST_SUCCESS = 'app/App/GET_PLAY_LIST_SUCCESS';
export const GET_PLAY_LIST_FAIL = 'app/App/GET_PLAY_LIST_FAIL';

export const ADD_PLAY_LIST = 'app/App/ADD_PLAY_LIST';
export const ADD_PLAY_LIST_SUCCESS = 'app/App/ADD_PLAY_LIST_SUCCESS';
export const ADD_PLAY_LIST_FAIL = 'app/App/ADD_PLAY_LIST_FAIL';

export const FOLLOWERS_TYPE = 'followers';
export const FOLLOWINGS_TYPE = 'followings';
