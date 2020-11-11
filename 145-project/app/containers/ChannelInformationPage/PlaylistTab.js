import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NoItem from 'components/NoItem';
import PlaylistList from './PlaylistList';
const PlaylistWrapper = styled.div`

`;

function PlaylistTab({data}){
    return(
        <PlaylistWrapper>
            {!(data.user.playlist && data.user.playlist.length) && <NoItem />}
            {data.user.playlist && data.user.playlist.length && <PlaylistList data={data.user.playlist} />}
        </PlaylistWrapper>


    );
}
PlaylistTab.propTypes = {
    data:PropTypes.object.isRequired,
}
export default memo(PlaylistTab)