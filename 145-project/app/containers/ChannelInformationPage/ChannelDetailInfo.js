import React,{memo, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AllFilters from 'components/AllFilters';
import ChannelInfoTab from './ChannelInfoTab';

const ChannelInfoWrapper = styled.div`
max-width:900px;
margin:auto;
background: #fff;
color: #000;
position: relative;
top: 330px;
`;
export const HOME = "home";
export const ALL_VIDEOS = "allVideos";
export const PLAYLISTS = "playlists";
export const ABOUT_CHANNEL = "aboutChannel";

const values = {
    "home": "خانه",
    "allVideos":"همه ویدئو ها",
    "playlists": "لیست پخش",
    "aboutChannel":"در باره کانال",
};

function ChannelDetailInfo({data}){
    const [filter,setFilter] =  useState('home');
    return(
        <ChannelInfoWrapper>
            <AllFilters values={values} defaultValue={filter} onChange={setFilter} />
            {filter ===ABOUT_CHANNEL && <ChannelInfoTab data={data} />}
        </ChannelInfoWrapper>
    );
}

ChannelDetailInfo.propTypes ={
    data: PropTypes.object.isRequired,
}
export default memo(ChannelDetailInfo);