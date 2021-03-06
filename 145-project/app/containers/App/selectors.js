import { createSelector } from 'reselect';

const selectApp = state => state.app;
const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectApp = () =>
  createSelector(
    selectApp,
    appState => appState,
  );

const makeSelectError = () =>
  createSelector(
    selectApp,
    appState => appState && appState.error,
  );
  const makeSelectNotificationBox = () =>
  createSelector(
    selectApp,
    appState => appState.notificationBox,
  );



const makeSelectDrawerIsOpen = () =>
  createSelector(
    selectApp,
    appState => appState && appState.drawerIsOpen,
  );

const makeSelectFileUpload = () =>
  createSelector(
    selectApp,
    appState => appState.fileUpload,
  );
const makeSelectUploadedBanner = () =>
  createSelector(
    selectApp,
    appState => appState.bannerUpload,
  );
const makeSelectFileUploadedProgress = () =>
  createSelector(
    selectApp,
    appState => appState.fileUpload.precentage,
  );

const makeSelectTags = () =>
  createSelector(
    selectApp,
    appState => {
      const { tags, addTag } = appState;
      if (
        addTag.data &&
        tags.data.filter(item => item.id === addTag.data.id).length === 0
      ) {
        tags.data.push({ ...addTag.data, isNew: true });
      }
      return tags;
    },
  );
const makeSelectAddedTags = () =>
  createSelector(
    selectApp,
    appState => appState.addTag.data,
  );

const makeSelectCategories = () =>
  createSelector(
    selectApp,
    appState => appState.categories,
  );

const makeSelectAddedCategory = () =>
  createSelector(
    selectApp,
    appState => appState.addCategory.data,
  );
const makeSelectPlaylist = () =>
  createSelector(
    selectApp,
    appState => appState.playlist,
  );
const makeSelectAddedPlayList = () =>
  createSelector(
    selectApp,
    appState => appState.addPlaylist.data,
  );

const makeSelectCreatedVideo = () =>
  createSelector(
    selectApp,
    appState => appState.createdVideo,
  );
const makeSelectDeletedVideo = () =>
  createSelector(
    selectApp,
    appState => appState.deletedVideo,
  );

const makeSelectMyVideosList = () =>
  createSelector(
    selectApp,
    appState => appState.myVideos,
  );
const makeSelectVideoInfo = () =>
  createSelector(
    selectApp,
    appState => {
      let videoData = appState.getVideoInfo;
      if (videoData.data && videoData.data.tags && videoData.data.tags.length) {
        videoData.data.tags = appState.getVideoInfo.data.tags.map(
          item => item.id,
        );
      }
      if (videoData.data && videoData.data.playlist) {
        videoData.data.playlist = appState.getVideoInfo.data.playlist.id;
      }
      return videoData;
    },
  );

const makeSelectUpdatedVideo = () =>
  createSelector(
    selectApp,
    appState => appState.updateVideo,
  );

const makeSelectVideoStatistics = () =>
  createSelector(
    selectApp,
    appState => appState.videoStatistics,
  );

const makeSelectFollowingsList = () =>
  createSelector(
    selectApp,
    appState => appState.getFollowingsList,
  );

const makeSelectFollowersList = () =>
  createSelector(
    selectApp,
    appState => appState.getFollowersList,
  );

  const makeSelectUnfollowChannel = () =>
  createSelector(
    selectApp,
    appState => appState.unfollowChannel,
  );


  const makeSelectAddedComment = () =>
  createSelector(
    selectApp,
    appState => appState.addComment,
  );
  const makeSelectDeletedComment = () =>
  createSelector(
    selectApp,
    appState => appState.deleteComment,
  );


  

  const makeSelectFollowChannel = () =>
  createSelector(
    selectApp,
    appState => appState.unfollowChannel,
  );

  const makeSelectComments = () =>
  createSelector(
    selectApp,
    appState =>{
      if(appState.comments.data){
       const  data =  appState.comments.data.reduce((carry,item)=>{
          if(!item.parent_id){
              return {
                  ...carry,
                  [item.id] :{
                      ...item,
                      children:[],
                  }
                  
              }
          }
          return {
              ...carry,
              [item.parent_id]:{
                  ...carry[item.parent_id],
                  children:[...carry[item.parent_id].children,item],
              }
          }
      
      },{});

      return {
        ...appState.comments,
        data:Object.values(data),
      };
      }
      return appState.comments;
    }
  );
  const makeSelectChannelStatistics = () =>
  createSelector(
    selectApp,
    appState => appState.channelStatistics,
  );

  const makeSelectUserMe = () =>
  createSelector(
    selectApp,
    appState => appState.userMe,
  );

  
  const makeSelectChannelInformation = () =>
  createSelector(
    selectApp,
    appState => appState.channelInformation,
  );

export {
  makeSelectLocation,
  makeSelectApp,
  makeSelectError,
  makeSelectDrawerIsOpen,
  makeSelectFileUpload,
  makeSelectUploadedBanner,
  makeSelectCreatedVideo,
  makeSelectDeletedVideo,
  makeSelectFileUploadedProgress,
  makeSelectTags,
  makeSelectAddedTags,
  makeSelectCategories,
  makeSelectAddedCategory,
  makeSelectPlaylist,
  makeSelectAddedPlayList,
  makeSelectMyVideosList,
  makeSelectVideoInfo,
  makeSelectUpdatedVideo,
  makeSelectVideoStatistics,
  makeSelectFollowingsList,
  makeSelectFollowersList,
  makeSelectUnfollowChannel,
  makeSelectFollowChannel,
  makeSelectComments,
  makeSelectAddedComment,
  makeSelectNotificationBox,
  makeSelectDeletedComment,
  makeSelectChannelStatistics,
  makeSelectUserMe,
  makeSelectChannelInformation,
};
