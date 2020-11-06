/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';
import UploadPage from 'containers/UploadPage/Loadable';
import MyVideosPage from 'containers/MyVideosPage/Loadable';
import VideoUpdatePage from 'containers/VideoUpdatePage/Loadable';
import VideoShowPage from 'containers/VideoShowPage/Loadable';
import ShowFollowPage from 'containers/ShowFollowPage/Loadable';
import CommentPage from 'containers/CommentPage/Loadable';

import RenderError from 'components/RenderError';


import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import * as routes from './routes';

import reducer from './reducer';
import saga from './saga';

import GlobalStyle from '../../global-styles';
import StatisticsChannelPage from 'containers/StatisticsChannelPage/Loadable';

function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <RenderError />
      <Switch>
        <Route exact path={routes.HOME_PAGE_ROUTE} component={HomePage} />
        <Route exact path={routes.LOGIN_ROUTE} component={LoginPage} />
        <Route exact path={routes.DASHBOARD_ROUTE} component={DashboardPage} />
        <Route exact path={routes.MYVIDEOS_ROUTE} component={MyVideosPage} />
        <Route exact path={routes.UPLOAD_ROUTE} component={UploadPage} />
        <Route exact path={routes.SHOW_VIDEO_ROUTE} component={VideoShowPage} />
        <Route exact path={routes.FOLLOW_ROUTE} component={ShowFollowPage} />
        <Route exact path={routes.COMMENT_ROUTE} component={CommentPage} />
        <Route exact path={routes.CHANNEL_STATISTICS_ROUTE} component={StatisticsChannelPage} />
        <Route
          exact
          path={routes.GET_VIDEO_ROUTE}
          component={VideoUpdatePage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
