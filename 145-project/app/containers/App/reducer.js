/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { getAuth } from 'utils/auth';
import { getChannelStatisticsSuccess } from './actions';
import {
  ERROR_HAPPEN,
  ERROR_CLEAR,
  DRAWER_OPEN,
  FILE_UPLOAD,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAIL,
  CREATE_VIDEO,
  CREATE_VIDEO_SUCCESS,
  CREATE_VIDEO_FAIL,
  GET_TAGS,
  GET_TAGS_FAIL,
  GET_TAGS_SUCCESS,
  GET_CATEGORIS,
  GET_CATEGORIS_SUCCESS,
  GET_CATEGORIS_FAIL,
  ADD_TAG,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAIL,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY,
  ADD_CATEGORY_FAIL,
  GET_PLAY_LIST,
  GET_PLAY_LIST_SUCCESS,
  GET_PLAY_LIST_FAIL,
  ADD_PLAY_LIST,
  ADD_PLAY_LIST_SUCCESS,
  ADD_PLAY_LIST_FAIL,
  GET_UPLOAD_PERCENT,
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
  GET_VIDEO_INFO_SUCCESS,
  GET_VIDEO_INFO_FAIL,
  GET_VIDEO_INFO,
  CLEAR_VIDEO_INFO,
  UPDATE_VIDEO,
  UPDATE_VIDEO_SUCCESS,
  UPDATE_VIDEO_FAIL,
  CLEAR_UPDATED_VIDEO,
  GET_VIDEO_STATISTICS,
  GET_VIDEO_STATISTICS_SUCCESS,
  GET_VIDEO_STATISTICS_FAIL,
  UNFOLLOW_CHANNEL,
  UNFOLLOW_CHANNEL_SUCCESS,
  UNFOLLOW_CHANNEL_FAIL,
  GET_FOLLOWINGS_LIST,
  GET_FOLLOWINGS_LIST_SUCCESS,
  GET_FOLLOWINGS_LIST_FAIL,
  GET_FOLLOWER_LIST,
  GET_FOLLOWER_LIST_SUCCESS,
  GET_FOLLOWER_LIST_FAIL,
  FOLLOW_CHANNEL,
  FOLLOW_CHANNEL_SUCCESS,
  FOLLOW_CHANNEL_FAIL,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  SHOW_NOTIFICATION_BOX,
  HIDE_NOTIFICATION_BOX,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  GET_CHANNEL_STATISTICS,
  GET_CHANNEL_STATISTICS_SUCCESS,
  GET_CHANNEL_STATISTICS_FAIL,
  GET_USER_ME,
  GET_USER_ME_SUCCESS,
  GET_USER_ME_FAIL,
  GET_CHANNEL_INFORMATION,
  GET_CHANNEL_INFORMATION_SUCCESS,
  GET_CHANNEL_INFORMATION_FAIL,
  GET_CHANNEL_INFORMATION_CLEAR,
} from './constants';

const userMeItem =getAuth().userMe;
export const initialState = {
  error: null,
  drawerIsOpen: false,
  fileUpload: {
    file: null,
    error: null,
    data: null,
    percentage: 0,
  },
  userMe:{
    data: userMeItem ? userMeItem : null,
    error:null,
  },
  bannerUpload: {
    banner: null,
    data: null,
    error: null,
  },
  createdVideo: {
    information: null,
    data: null,
    error: null,
  },
  updateVideo: {
    slug: null,
    params: null,
    data: null,
    error: null,
  },
  getVideoInfo: {
    slug: null,
    data: null,
    error: null,
  },
  videoStatistics: {
    slug: null,
    params: null,
    data: null,
    error: null,
  },
  deletedVideo: {
    slug: null,
    data: null,
    error: null,
  },
  myVideos: {
    params: null,
    data: null,
    error: null,
  },
  tags: {
    data: null,
    error: null,
  },
  addTag: {
    tag: null,
    error: null,
    data: null,
  },
  categories: {
    data: [],
    error: null,
  },
  addCategory: {
    category: null,
    error: null,
    data: null,
  },
  playlist: {
    data: null,
    error: null,
  },
  addPlaylist: {
    playlist: null,
    error: null,
    data: null,
  },

  getFollowingsList: {
    data: null,
    error: null,
  },

  getFollowersList: {
    data: null,
    error: null,
  },
  unfollowChannel: {
    channel: null,
    data: null,
    error: null,
  },
  followChannel: {
    channel: null,
    data: null,
    error: null,
  },
  comments:{
    data:null,
    error:null,
  },

  addComment:{
    data:null,
    params:null,
    error:null,
  },
  notificationBox:{
    type:null,
    title:null,
  },
  deleteComment:{
    data:null,
    error:null,
    params:null,
  },
  channelStatistics:{
    range:null,
    data:null,
    error:null,
  },
  channelInformation:{
    name:null,
    data:null,
    error:null,
  }
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR_HAPPEN:
        draft.error = action.error;
        break;
      case ERROR_CLEAR:
        draft.error = null;
        break;
      case DRAWER_OPEN:
        draft.drawerIsOpen =
          action.show === undefined ? !draft.drawerIsOpen : action.show;
        break;
      case FILE_UPLOAD:
        draft.fileUpload.file = action.file;
        draft.fileUpload.data = null;
        draft.fileUpload.error = null;
        draft.fileUpload.percentage = 0;
        break;
      case FILE_UPLOAD_SUCCESS:
        draft.fileUpload.file = null;
        draft.fileUpload.data = action.data;
        draft.fileUpload.error = null;
        draft.fileUpload.percentage = 100;
        break;
      case FILE_UPLOAD_FAIL:
        draft.fileUpload.file = null;
        draft.fileUpload.data = null;
        draft.fileUpload.error = action.error;
        draft.fileUpload.percentage = 0;
        break;
      case GET_UPLOAD_PERCENT:
        draft.fileUpload.percentage = action.percent;
        break;
      case UPLOAD_BANNER:
        draft.bannerUpload.banner = action.banner;
        draft.bannerUpload.data = null;
        draft.bannerUpload.error = null;
        break;
      case UPLOAD_BANNER_SUCCESS:
        draft.bannerUpload.banner = null;
        draft.bannerUpload.data = action.data;
        draft.bannerUpload.error = null;
        break;
      case UPLOAD_BANNER_FAIL:
        draft.bannerUpload.banner = null;
        draft.bannerUpload.data = null;
        draft.bannerUpload.error = action.error;
        break;
      case CREATE_VIDEO:
        draft.createdVideo.information = action.information;
        draft.createdVideo.data = null;
        draft.createdVideo.error = null;
        break;
      case CREATE_VIDEO_SUCCESS:
        draft.createdVideo.information = null;
        draft.createdVideo.data = action.data;
        draft.createdVideo.error = null;

        break;
      case CREATE_VIDEO_FAIL:
        draft.createdVideo.information = null;
        draft.createdVideo.data = null;
        draft.createdVideo.error = action.error;
        break;

      case UPDATE_VIDEO:
        draft.updateVideo.slug = action.slug;
        draft.updateVideo.params = action.params;
        draft.updateVideo.data = null;
        draft.updateVideo.error = null;
        break;
      case UPDATE_VIDEO_SUCCESS:
        draft.updateVideo.slug = null;
        draft.updateVideo.params = null;
        draft.updateVideo.data = action.data;
        draft.updateVideo.error = null;

        break;
      case UPDATE_VIDEO_FAIL:
        draft.updateVideo.slug = null;
        draft.updateVideo.params = null;
        draft.updateVideo.data = null;
        draft.updateVideo.error = action.error;
        break;

      case CLEAR_VIDEO_INFO:
        draft.getVideoInfo = initialState.getVideoInfo;
        draft.videoStatistics = initialState.videoStatistics;
        break;
      case GET_VIDEO_INFO:
        draft.getVideoInfo.slug = action.slug;
        draft.getVideoInfo.data = null;
        draft.getVideoInfo.error = null;
        break;
      case GET_VIDEO_INFO_SUCCESS:
        draft.getVideoInfo.slug = null;
        draft.getVideoInfo.data = action.data;
        draft.getVideoInfo.error = null;
        break;
      case GET_VIDEO_INFO_FAIL:
        draft.getVideoInfo.slug = null;
        draft.getVideoInfo.data = null;
        draft.getVideoInfo.error = action.error;
        break;

      // ========
      case GET_VIDEO_STATISTICS:
        draft.videoStatistics.slug = action.slug;
        draft.videoStatistics.params = action.params;
        draft.videoStatistics.data = null;
        draft.videoStatistics.error = null;
        break;
      case GET_VIDEO_STATISTICS_SUCCESS:
        draft.videoStatistics.slug = null;
        draft.videoStatistics.params = null;
        draft.videoStatistics.data = action.data;
        draft.videoStatistics.error = null;
        break;
      case GET_VIDEO_STATISTICS_FAIL:
        draft.videoStatistics.slug = null;
        draft.videoStatistics.params = null;
        draft.videoStatistics.data = null;
        draft.videoStatistics.error = action.error;
        break;
      case CLEAR_UPDATED_VIDEO:
        draft.getVideoInfo = initialState.getVideoInfo;
        draft.createdVideo = initialState.createdVideo;
        draft.bannerUpload = initialState.bannerUpload;
        draft.updateVideo = initialState.updateVideo;
        break;
      case CLEAR_VIDEO_DATA:
        draft.fileUpload = initialState.fileUpload;
        draft.createdVideo = initialState.createdVideo;
        draft.bannerUpload = initialState.bannerUpload;
        break;
      case DELETE_VIDEO:
        draft.deletedVideo.slug = action.slug;
        draft.deletedVideo.data = null;
        draft.deletedVideo.error = null;
        break;
      case DELETE_VIDEO_SUCCESS:
        draft.deletedVideo.slug = null;
        draft.deletedVideo.data = action.data;
        draft.deletedVideo.error = null;
        draft.myVideos.data = state.myVideos.data.filter(
          item => item.slug !== state.deletedVideo.slug,
        );
        break;
      case DELETE_VIDEO_FAIL:
        draft.deletedVideo.data = null;
        draft.deletedVideo.error = action.error;
        break;
      case HIDE_DELETE_VIDEO_ERROR:
        draft.deletedVideo.error = null;
        break;
      case GET_MY_VIDEOS:
        draft.myVideos.params = action.params;
        draft.myVideos.error = null;
        break;
      case GET_MY_VIDEOS_SUCCESS:
        draft.myVideos.params = null;
        draft.myVideos.data = action.data;
        draft.myVideos.error = null;
        break;
      case GET_MY_VIDEOS_FAIL:
        draft.myVideos.error = action.error;
        break;
      case GET_TAGS:
        draft.tags.error = null;
        break;
      case GET_TAGS_SUCCESS:
        draft.tags.data = action.data;
        draft.tags.error = null;
        break;
      case GET_TAGS_FAIL:
        draft.tags.data = null;
        draft.tags.error = action.error;
        break;
      case GET_CATEGORIS:
        draft.categories.error = null;
        draft.categories.data = [];
        break;
      case GET_CATEGORIS_SUCCESS:
        draft.categories.data = action.data;
        draft.categories.error = null;
        break;
      case GET_CATEGORIS_FAIL:
        draft.categories.data = null;
        draft.categories.error = action.error;
        break;
      case ADD_TAG:
        draft.addTag.tag = action.tag;
        draft.addTag.data = null;
        draft.addTag.error = null;

        break;
      case ADD_TAG_SUCCESS:
        draft.addTag.data = action.data;
        draft.addTag.tag = null;
        draft.addTag.error = null;
        break;
      case ADD_TAG_FAIL:
        draft.addTag.data = null;
        draft.addTag.tag = null;
        draft.addTag.error = action.error;
        break;
      case ADD_CATEGORY:
        draft.addCategory.category = action.title;
        draft.addCategory.data = null;
        draft.addCategory.error = null;

        break;
      case ADD_CATEGORY_SUCCESS:
        draft.addCategory.category = null;
        draft.addCategory.data = action.data;
        draft.addCategory.error = null;
        break;
      case ADD_CATEGORY_FAIL:
        draft.addCategory.data = null;
        draft.addCategory.category = null;
        draft.addCategory.error = action.error;
        break;
      // playlist
      case GET_PLAY_LIST:
        draft.playlist.error = null;
        draft.playlist.data = null;
        break;
      case GET_PLAY_LIST_SUCCESS:
        draft.playlist.data = action.data;
        draft.playlist.error = null;
        break;
      case GET_PLAY_LIST_FAIL:
        draft.playlist.data = null;
        draft.playlist.error = action.error;
        break;
      // add playlist
      case ADD_PLAY_LIST:
        draft.addPlaylist.playlist = action.title;
        draft.addPlaylist.data = null;
        draft.addPlaylist.error = null;

        break;
      case ADD_PLAY_LIST_SUCCESS:
        draft.addPlaylist.playlist = null;
        draft.addPlaylist.data = action.data;
        draft.addPlaylist.error = null;
        break;
      case ADD_PLAY_LIST_FAIL:
        draft.addPlaylist.data = null;
        draft.addPlaylist.playlist = null;
        draft.addPlaylist.error = action.error;
        break;

      case GET_FOLLOWINGS_LIST:
        draft.getFollowingsList.data = null;
        draft.getFollowingsList.error = null;

        break;
      case GET_FOLLOWINGS_LIST_SUCCESS:
        draft.getFollowingsList.data = action.data;
        draft.getFollowingsList.error = null;
        break;
      case GET_FOLLOWINGS_LIST_FAIL:
        draft.getFollowingsList.data = null;
        draft.getFollowingsList.error = action.error;
        break;

      case GET_FOLLOWER_LIST:
        draft.getFollowersList.data = null;
        draft.getFollowersList.error = null;
        break;
      case GET_FOLLOWER_LIST_SUCCESS:
        draft.getFollowersList.data = action.data;
        draft.getFollowersList.error = null;
        break;
      case GET_FOLLOWER_LIST_FAIL:
        draft.getFollowersList.data = null;
        draft.getFollowersList.error = action.error;
        break;

      case UNFOLLOW_CHANNEL:
        draft.unfollowChannel.channel = action.channel;
        draft.unfollowChannel.data = null;
        draft.unfollowChannel.error = null;

        break;
      case UNFOLLOW_CHANNEL_SUCCESS:
        draft.unfollowChannel.data = action.data;
        draft.getFollowingsList.data = state.getFollowingsList.data.map(
          item => {
            if (state.unfollowChannel.channel === item.channel.name) {
              return {
                ...item,
                followBtn: true,
              };
            }
            return item;
          },
        );

        draft.getFollowersList.data = state.getFollowersList.data.map(item => {
          if (state.unfollowChannel.channel === item.channel.name) {
            return {
              ...item,
              followBtn: true,
            };
          }
          return item;
        });

        draft.unfollowChannel.error = null;
        break;
      case UNFOLLOW_CHANNEL_FAIL:
        draft.unfollowChannel.channel = null;
        draft.unfollowChannel.data = null;
        draft.unfollowChannel.error = action.error;
        break;

      case FOLLOW_CHANNEL:
        draft.followChannel.channel = action.channel;
        draft.followChannel.data = null;
        draft.followChannel.error = null;

        break;
      case FOLLOW_CHANNEL_SUCCESS:
        draft.followChannel.data = action.data;
        draft.getFollowingsList.data = state.getFollowingsList.data.map(
          item => {
            if (state.followChannel.channel === item.channel.name) {
              return {
                ...item,
                followBtn: false,
              };
            }
            return item;
          },
        );

        draft.getFollowersList.data = state.getFollowersList.data.map(item => {
          if (state.unfollowChannel.channel === item.channel.name) {
            return {
              ...item,
              followBtn: true,
            };
          }
          return item;
        });
        draft.followChannel.error = null;
        break;
      case FOLLOW_CHANNEL_FAIL:
        draft.followChannel.channel = null;
        draft.followChannel.data = null;
        draft.followChannel.error = action.error;
        break;
      case GET_COMMENTS:
        draft.comments.data = null;
        draft.comments.error = null;
        draft.addComment = initialState.addComment;
        break;
      case GET_COMMENTS_SUCCESS:
        draft.comments.data = action.data;
        draft.comments.error = null;
        break;
      case GET_COMMENTS_FAIL:
        draft.comments.data = null;
        draft.comments.error = action.error;
        break;
        case ADD_COMMENT:
          draft.addComment.params = action.params;
          draft.addComment.data = null;
          draft.addComment.error = null;
          break;
          case ADD_COMMENT_SUCCESS:
            draft.addComment.params = null;
            draft.addComment.data = action.data;
            draft.addComment.error = null;
            break;
            case ADD_COMMENT_FAIL:
              draft.addComment.params = null;
              draft.addComment.data = null;
              draft.addComment.error = action.error;
              break;

              case DELETE_COMMENT:
          draft.deleteComment.data = null;
          draft.deleteComment.data = null;
          draft.deleteComment.params = action.params;        
          break;
          case DELETE_COMMENT_SUCCESS:
            draft.deleteComment.params = null;
            draft.deleteComment.data = action.data;
            draft.deleteComment.error = null;
            break;
            case DELETE_COMMENT_FAIL:
              draft.deleteComment.params = null;
              draft.deleteComment.data = null;
              draft.deleteComment.error = action.error;
              break;
              // channel statistics
              case GET_CHANNEL_STATISTICS:
                draft.channelStatistics.range = action.range;
                draft.channelStatistics.data = null;
                draft.channelStatistics.error = null;
                break;
              case GET_CHANNEL_STATISTICS_SUCCESS:
                draft.channelStatistics.range = null;
                draft.channelStatistics.data = action.data;
                draft.channelStatistics.error = null;
                break;
              case GET_CHANNEL_STATISTICS_FAIL:
                draft.channelStatistics.range = null;
                draft.channelStatistics.data = null;
                draft.channelStatistics.error = action.error;
                break;
            case SHOW_NOTIFICATION_BOX:
              draft.notificationBox.type = action.params.type;
              draft.notificationBox.title = action.params.title;
              break;
            case HIDE_NOTIFICATION_BOX:
              draft.notificationBox.type = null;
              draft.notificationBox.title = null;
              break;
              // user me infromation

              case GET_USER_ME:
                draft.userMe.error = null;
                break;
              case GET_USER_ME_SUCCESS:
                draft.userMe.data = action.data;
                draft.userMe.error = null;
                break;
              case GET_USER_ME_FAIL:
                draft.userMe.data = null;
                draft.userMe.error = action.error;
                break;

                
              case GET_CHANNEL_INFORMATION:
                draft.channelInformation.name = action.name;
                draft.channelInformation.error = null;

                break;
              case GET_CHANNEL_INFORMATION_SUCCESS:
                draft.channelInformation.name = null;
                draft.channelInformation.data = action.data;
                draft.channelInformation.error = null;
                break;
                case GET_CHANNEL_INFORMATION_FAIL:
                  draft.channelInformation.name = null;
                  draft.channelInformation.data = null;
                  draft.channelInformation.error = action.error;
                  break;

                  case GET_CHANNEL_INFORMATION_CLEAR:
                    draft.channelInformation = initialState.channelInformation;
                    break;

    }
  });

export default appReducer;
