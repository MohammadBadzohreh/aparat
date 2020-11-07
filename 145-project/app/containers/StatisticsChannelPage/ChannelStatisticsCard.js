import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import {
  PeopleAltOutlined as PeopleIcon,
  MovieCreationOutlined as MovieIcon,
  TimelineOutlined as ChartIcon,
  } from '@material-ui/icons';

const ChannelStatiticsWrapper = styled(Grid)`
  margin-top: 2em;
  flex-wrap:wrap;
  & .item {
    box-shadow: 0px 1px 1px 1px #bcbcbc;
    text-align: center;
    padding: 4em 2em;
    border-top: 1px solid #ccc;
    width: 100%;
    margin: 0.5em;
    .value {
      color: #000;
      font-weight: bold;
      font-size: 1.2em;
      margin: 0.5em;
    }
    .label {
      color: #525050d9;
      margin: 0.5em;
      font-size: 1.2em;
      display: flex;
      justify-content: center;
      & .icon {
        margin-left: 0.2em;
        color: #373737;
      }
    }
  }
  @media (max-width: 480px) {
    .item {
      margin: 0.25em !important;
      padding: 3em 1em;
    }
    .label {
      display: block !important;
      padding: 0;
      .icon {
        display: inline-block !important;
        width: 100% !important;
        text-align: center !important;
      }
    }
  }
`;

function ChannelStatisticsCard({data}) {
      return (
    <ChannelStatiticsWrapper container wrap="nowrap">
      <Grid className="item">
        <div className="value">{data.total_comments}</div>
        <div className="label">
          <PeopleIcon className="icon" />
          تعداد پسند
        </div>
      </Grid>

      <Grid className="item">
        <div className="value">{data.total_followers}</div>
        <div className="label">
          <MovieIcon className="icon" />
          بازدید ویدئو
        </div>
      </Grid>
      <Grid className="item">
        <div className="value">{data.total_videos}</div>
        <div className="label">
          <MovieIcon className="icon" />
          تعداد ویدئو ها
        </div>
      </Grid>

      <Grid className="item">
        <div className="value">{data.total_views}</div>
        <div className="label">
          <ChartIcon className="icon" />
          تعداد بازدید امروز
        </div>
      </Grid>
    </ChannelStatiticsWrapper>
  );
}

ChannelStatisticsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default memo(ChannelStatisticsCard);
