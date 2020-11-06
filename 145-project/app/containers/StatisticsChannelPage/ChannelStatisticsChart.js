import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, FormControl, Select, MenuItem } from '@material-ui/core';
import { Line as LineChart } from 'react-chartjs-2';

const VideoStatisticsWrapper = styled(Grid)`
  max-width: 100%;
`;

function ChannelStatisticsChart({ data, range, handleChange }) {
  const videoData = {
    labels: Object.keys(data).map(date => {
      return new Date(date).toLocaleDateString('fa-IR');
    }),
    datasets: [
      {
        label: 'اطلاعات بازدید ویدئو',
        fill: false,
        backgroundColor: 'rgb(10, 210, 135)',
        borderColor: 'rgb(5, 163, 232)',

        pointHitRadius: 10,
        data: Object.values(data),
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            max: Math.max(...Object.values(data)) + 1,
            min: 1,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <VideoStatisticsWrapper>
      <Grid item xs={12}>
        <FormControl>
          <Select
            id="demo-simple-select-required"
            value={range}
            onChange={e => handleChange(e.target.value)}
          >
            <MenuItem value={7}>یک هفته اخیر</MenuItem>
            <MenuItem value={30}>یک ماه اخیر</MenuItem>
            <MenuItem value={90}>سه ماه اخیر</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <LineChart data={videoData} options={options} />
      </Grid>
    </VideoStatisticsWrapper>
  );
}

ChannelStatisticsChart.propTypes = {
  data: PropTypes.object.isRequired,
  range: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default memo(ChannelStatisticsChart);
