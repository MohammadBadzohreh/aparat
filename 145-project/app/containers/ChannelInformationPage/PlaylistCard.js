import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {PlaylistPlayOutlined as  PlaylistIcon} from '@material-ui/icons';

const PlaylistCardWrapper=  styled(Grid)`
    position: relative;
    margin: 0.3em !important;
    cursor:pointer;

& .content{
    display: grid;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 150px;
    background-color: rgba(204 ,204 ,204,0.4);
    border: 2px solid #005bff4d;
    border-radius: 3px;
    & > div{
        font-size: 1.5em;
        color: #523f03;
    }
}
.size{
    position: absolute;
    bottom: 0.5em;
    left: 0.5em;
    background: #cfa72dab;
    padding: 0.2em 1em;
    border-radius: 30px;

}

& .playlistIcon{
    font-size: 10em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:#396faab3;
    opacity: 0.35;
    box-shadow: 1px 1px 3px #bbb;

}


`;
function PlaylistCard({data}){
    return (
        <PlaylistCardWrapper item> 
        <div className="content">
            <PlaylistIcon className="playlistIcon" />
        <div>{data.title}</div>
            <span className="size">شامل {data.size} ویدئو</span>
        </div>
        </PlaylistCardWrapper>
        
    );
}
PlaylistCard.propTypes = {
    data:PropTypes.object.isRequired,
}
export default PlaylistCard;