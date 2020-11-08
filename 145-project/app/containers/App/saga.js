/* eslint-disable no-console */
import { takeLatest, call, put, fork, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import {
  FILE_UPLOAD,
  GET_TAGS,
  GET_CATEGORIS,
  ADD_TAG,
  ADD_CATEGORY,
  ADD_PLAY_LIST,
  GET_PLAY_LIST,
  CREATE_VIDEO,
  UPLOAD_BANNER,
  GET_MY_VIDEOS,
  DELETE_VIDEO,
  GET_VIDEO_INFO,
  UPDATE_VIDEO,
  GET_VIDEO_STATISTICS,
  UNFOLLOW_CHANNEL,
  GET_FOLLOWINGS_LIST,
  GET_FOLLOWER_LIST,
  FOLLOWERS_TYPE,
  FOLLOWINGS_TYPE,
  FOLLOW_CHANNEL,
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_CHANNEL_STATISTICS,
  GET_USER_ME,
  GET_CHANNEL_INFORMATION,
} from './constants';
import {
  fileUploadFailAction,
  fileUploadSuccessAction,
  getFileUploadedePercentAction,
  getTagsSuccessAction,
  getTagsFailAction,
  getCategoriesSuccessAction,
  getCategoriesFailAction,
  addTagSuccessAction,
  addTagFailAction,
  addCategorySuccessAction,
  addCategoryFailAction,
  getCategoriesAction,
  getPlaylistSuccessAction,
  getPlaylistFailAction,
  getPlaylistAction,
  addPlaylistSuccessAction,
  addPlaylistFailAction,
  createVideoActionSuccessAction,
  createVideoActionFailAction,
  bannerUploadFailAction,
  bannerUploadSuccessAction,
  getMyVideosSuccessAction,
  getMyVideosFailAction,
  deleteVideoSuccessAction,
  deleteVideoFailAction,
  getVideoInfoSuccessAction,
  getVideoInfoFailAction,
  updateVideoSuccessAction,
  updateVideoFailAction,
  getVideosStatisticsSuccessAction,
  getVideosStatisticsFailAction,
  unfollowChannelFailAction,
  getFollowingsListFailAction,
  getFollowingsListSuccessAction,
  unfollowChannelSuccessAction,
  getFollowersListSuccessAction,
  getFollowersListFailAction,
  followChannelSuccessAction,
  followChannelFailAction,
  getCommentsSuccessAction,
  getCommentsFailAction,
  addCommentSuccessAction,
  addCommentFailAction,
  getCommentsAction,
  showNotificationBoxAction,
  hideNotificationBoxAction,
  getChannelStatisticsSuccess,
  getChannelStatisticsFail,
  getUserMeSuccess,
  getUserMeFail,
  getUserMe,
  getChannelInformationSuccessAction,
  getChannelInformationFailAction,
  getChannelInformationAction,
} from './actions';

import {
  uploadFileApi,
  addCategoryApi,
  addPlaylistApi,
  addTagApi,
  deleteVideoApi,
  getMyVideosApi,
  getCategoriesApi,
  getPlaylistApi,
  getTagsApi,
  getVideoInfoApi,
  createVideoApi,
  uploadBannerApi,
  updateVideoApi,
  getVideoStatisticsApi,
} from './APIs/videos';
import {
  getFollowingsApi,
  getFollowersApi,
  unfollowChannnelApi,
  followChannelApi,
  getUserMeApi,
} from './APIs/users';
import { addCommentApi, deleteCommentApi, getCommentApi } from './APIs/comment';
import { NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_SUCCESS } from 'components/NotificationBox';
import { channelInformationApi, getChannelStatiticsApi } from './APIs/channels';
import { setAuth } from 'utils/auth';

const identity = a => a;

const createAsync = file => {
  let emit;
  const chan = eventChannel(emitter => {
    emit = emitter;
    return () => {};
  });
  const promise = uploadFileApi(file, function uploaded(e) {
    emit((e.loaded * 100) / e.total);
  })
    .then(response => emit({ state: 'ok', response }))
    .catch(error =>
      emit({
        state: 'nok',
        error,
      }),
    );

  return [promise, chan];
};

function* watchOnProgress(chan) {
  while (true) {
    const data = yield take(chan);
    if (typeof data === 'number') {
      yield put(getFileUploadedePercentAction(data));
    } else if (data.state === 'ok') {
      yield put(fileUploadSuccessAction(data.response.data));
    } else {
      yield put(fileUploadFailAction(data.error.response));
    }
  }
}

function* uploadFileToServer({ file }) {
  try {
    const [promise, chan] = createAsync(file);
    yield fork(watchOnProgress, chan);
    yield call(identity(promise));
  } catch (error) {
    yield put(fileUploadFailAction(error));
  }
}

function* uploadBannerToServer({ banner }) {
  try {
    const response = yield call(uploadBannerApi, banner);
    yield put(bannerUploadSuccessAction(response.data));
  } catch (error) {
    yield put(bannerUploadFailAction(error));
  }
}

function* createVideoToServer({ information }) {
  try {
    const response = yield call(createVideoApi, information);
    yield put(createVideoActionSuccessAction(response.data));
  } catch (error) {
    yield put(createVideoActionFailAction(error));
  }
}

function* updateVideoServer({ slug, params }) {
  try {
    const response = yield call(updateVideoApi, slug, params);
    yield put(updateVideoSuccessAction(response.data));
  } catch (error) {
    yield put(updateVideoFailAction(error));
  }
}

function* getVideoInfoFromServer({ slug }) {
  try {
    const response = yield call(getVideoInfoApi, slug);
    yield put(getVideoInfoSuccessAction(response.data));
  } catch (error) {
    console.log(error);
    yield put(getVideoInfoFailAction(error));
  }
}

function* deleteVideoFromServer({ slug }) {
  try {
    const response = yield call(deleteVideoApi, slug);
    yield put(deleteVideoSuccessAction(response.data));
  } catch (error) {
    yield put(deleteVideoFailAction(error));
  }
}

function* getMyVdieosFromServer({ params }) {
  try {
    const response = yield call(getMyVideosApi, params);
    yield put(getMyVideosSuccessAction(response.data));
  } catch (error) {
    yield put(getMyVideosFailAction(error));
  }
}

function* getVideoStatisticsFromServer({ slug, params }) {
  try {
    const response = yield call(getVideoStatisticsApi, slug, params);
    yield put(getVideosStatisticsSuccessAction(response.data));
  } catch (error) {
    yield put(getVideosStatisticsFailAction(error));
  }
}

function* getTagsFromServer() {
  try {
    const response = yield call(getTagsApi);
    yield put(getTagsSuccessAction(response.data));
  } catch (error) {
    yield put(getTagsFailAction(error));
  }
}
function* addTagToServer({ tag }) {
  try {
    const response = yield call(addTagApi, tag);
    yield put(addTagSuccessAction(response.data));
  } catch (error) {
    yield put(addTagFailAction(error));
  }
}
function* getCategoriesFromServer() {
  try {
    const response = yield call(getCategoriesApi);
    yield put(getCategoriesSuccessAction(response.data));
  } catch (error) {
    yield put(getCategoriesFailAction(error));
  }
}
function* addCategoryToServer({ title }) {
  try {
    const response = yield call(addCategoryApi, title);
    yield put(addCategorySuccessAction(response.data));
    yield put(getCategoriesAction());
  } catch (error) {
    yield put(addCategoryFailAction(error));
  }
}

function* getPlaylistFromServer() {
  try {
    const response = yield call(getPlaylistApi);
    yield put(getPlaylistSuccessAction(response.data));
  } catch (error) {
    yield put(getPlaylistFailAction(error));
  }
}

function* addPlayListToServer({ title }) {
  try {
    const response = yield call(addPlaylistApi, title);
    yield put(addPlaylistSuccessAction(response.data));
    yield put(getPlaylistAction());
  } catch (error) {
    yield put(addPlaylistFailAction(error));
  }
}

function* getFollowingsFromServer() {
  try {
    const response = yield call(getFollowingsApi);
    response.data.map(item => ({
      ...item,
      type: FOLLOWINGS_TYPE,
    }));
    yield put(getFollowingsListSuccessAction(response.data));
  } catch (error) {
    yield put(getFollowingsListFailAction(error));
  }
}

function* getFollowersFromServer() {
  try {
    const response = yield call(getFollowersApi);
    response.data.map(item => ({
      ...item,
      type: FOLLOWERS_TYPE,
    }));

    yield put(getFollowersListSuccessAction(response.data));
  } catch (error) {
    yield put(getFollowersListFailAction(error));
  }
}

function* unfollowChannel({ channel }) {
  try {
    const response = yield call(unfollowChannnelApi, channel);
    yield put(unfollowChannelSuccessAction(response.data));
  } catch (error) {
    yield put(unfollowChannelFailAction(error));
  }
}

function* followChannel({ channel }) {
  try {
    const response = yield call(followChannelApi, channel);
    yield put(followChannelSuccessAction(response.data));
  } catch (error) {
    yield put(followChannelFailAction(error));
  }
}
function* getComments() {
  try {
    const response = yield call(getCommentApi);
    yield put(getCommentsSuccessAction(response.data));
  } catch (error) {
    yield put(getCommentsFailAction(error));
  }
}


function* addComment({params}) {
  try {
    const response = yield call(addCommentApi ,params);
    yield getComments();
    yield put(addCommentSuccessAction(response.data));
    yield put(showNotificationBoxAction("دیدگاه شما با موفقیت اضافه شد.",NOTIFICATION_TYPE_SUCCESS));
  
  } catch (error) {
    yield put(addCommentFailAction(error));
    yield put(showNotificationBoxAction("در افزودن دیدگاه خطایی به وجود آمده است.",NOTIFICATION_TYPE_ERROR));
  }
}


function* deleteComment({params}) {
  try {
    const response = yield call(deleteCommentApi ,params);
    yield getComments();
    yield put(addCommentSuccessAction(response.data));
    yield put(showNotificationBoxAction("دیدگاه شما با موفقیت حذف شد.",NOTIFICATION_TYPE_SUCCESS));
  
  } catch (error) {
    yield put(addCommentFailAction(error));
    yield put(showNotificationBoxAction("در حذف دیدگاه خطایی به وجود آمده است.",NOTIFICATION_TYPE_ERROR));
  }
}



function* getChannelStatitics({range}) {
  try {
    const response = yield call(getChannelStatiticsApi ,range);
    yield getComments();
    yield put(getChannelStatisticsSuccess(response.data));
  } catch (error) {
    yield put(getChannelStatisticsFail(error));
  }
}


export function* getUserMeInformation() {
  try {
    const response = yield call(getUserMeApi);
    yield put(getUserMeSuccess(response.data));
  } catch (error) {
    yield put(getUserMeFail(error));
  }
}

function* getChannelInformation({name}) {
  try {
    const response = yield call(channelInformationApi,name);  
    yield put(getChannelInformationSuccessAction(response.data));
  } catch (error) {
    yield put(getChannelInformationFailAction(error));
  }
}







export default function* defaultSaga() {
  yield takeLatest(FILE_UPLOAD, uploadFileToServer);
  yield takeLatest(UPLOAD_BANNER, uploadBannerToServer);
  yield takeLatest(CREATE_VIDEO, createVideoToServer);
  yield takeLatest(UPDATE_VIDEO, updateVideoServer);
  yield takeLatest(GET_VIDEO_INFO, getVideoInfoFromServer);
  yield takeLatest(GET_VIDEO_STATISTICS, getVideoStatisticsFromServer);
  yield takeLatest(DELETE_VIDEO, deleteVideoFromServer);
  yield takeLatest(GET_MY_VIDEOS, getMyVdieosFromServer);
  yield takeLatest(GET_TAGS, getTagsFromServer);
  yield takeLatest(ADD_TAG, addTagToServer);
  yield takeLatest(GET_CATEGORIS, getCategoriesFromServer);
  yield takeLatest(ADD_CATEGORY, addCategoryToServer);
  yield takeLatest(GET_PLAY_LIST, getPlaylistFromServer);
  yield takeLatest(ADD_PLAY_LIST, addPlayListToServer);
  yield takeLatest(GET_FOLLOWINGS_LIST, getFollowingsFromServer);
  yield takeLatest(GET_FOLLOWER_LIST, getFollowersFromServer);
  yield takeLatest(UNFOLLOW_CHANNEL, unfollowChannel);
  yield takeLatest(FOLLOW_CHANNEL, followChannel);
  yield takeLatest(GET_COMMENTS, getComments);
  yield takeLatest(ADD_COMMENT, addComment);
  yield takeLatest(DELETE_COMMENT, deleteComment);
  yield takeLatest(GET_CHANNEL_STATISTICS, getChannelStatitics),
  yield takeLatest(GET_USER_ME,getUserMeInformation),
  yield takeLatest(GET_CHANNEL_INFORMATION,getChannelInformation)
}
