import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { memo } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TopVideoInformationWrapper = styled.div`

& .video_banner{
    width:80px;
    height:50px;
}
& td,th{
    text-align:center;
}

`;


function TopVideoInformation({topVideos}){
      return (
    <TopVideoInformationWrapper>
    <Table>
        <TableHead>
            <TableRow>
            <TableCell>
                    اطلاعات ویدئو
                </TableCell>
                <TableCell>
                     تعداد لایک
                </TableCell>
                <TableCell>
                    تعداد بازدید
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>

            {topVideos.map(item=>(
                
            <TableRow key={item.id}>
                <TableCell>
                    <img className="video_banner" src={item.banner_link} alt={item.title} />
                    <span>{item.title}</span>
                </TableCell>
                <TableCell>{item.like_count}</TableCell>
                <TableCell>{item.views}</TableCell>
             </TableRow>
            ))}
        </TableBody>
    </Table>

</TopVideoInformationWrapper>
  );
}
TopVideoInformation.prototypes = {
    topVideos : propTypes.array.isRequired,
}
export default memo(TopVideoInformation);