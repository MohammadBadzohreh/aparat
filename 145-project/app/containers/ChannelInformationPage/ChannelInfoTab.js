import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const ChannelInfoTabWrapper = styled.div`
& .infoItem{
    color: #534747;
    margin-top: 1.4em;
    font-size: 1.1em;
}
h3.infoItem{
    margin-top:3em;
}

`;

function ChannelInfoTab({data}){
    console.log(data);
    return (
        <ChannelInfoTabWrapper>
            <h3 className="infoItem">اطلاعات کانال</h3>
            <p className="infoItem">این کانال رسمی به درخواست {data.channel.name} ایجاد شده است.</p>
            <p className="infoItem">تاریخ شروع فعالیت: {data.channel.created_at}</p>
            <p className="infoItem">تعداد ویدیوها: {data.channel.videos_count}</p>
            <p className="infoItem">تعداد بازدید کل: {data.channel.video_views}</p>
        </ChannelInfoTabWrapper>
    );
}
ChannelInfoTab.propTypes = {
    data:PropTypes.object.isRequired,
}
export default memo(ChannelInfoTab);