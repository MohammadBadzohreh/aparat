import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import PlaylistCard from './PlaylistCard';



const PlaylistWrapper = styled(Grid)`
justify-content:center;
`;

function PlaylistList({data}){
    console.log(data);
return (
    <PlaylistWrapper container>
        {
            data.map(palylist =>(
                <PlaylistCard key={palylist.id} data={palylist} />

            ))
        }
      

        
    </PlaylistWrapper>
);
}
export default memo(PlaylistList);