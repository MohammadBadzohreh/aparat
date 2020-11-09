import React,{memo} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {SettingsOutlined as SettingIcon} from "@material-ui/icons";
import {Grid} from '@material-ui/core';

const ChannelInfoWrapper = styled.div`
background:#fff;
margin-top: 225px;
position: absolute;
height:70px;
right: 0;
left: 0;
padding-top:1em;
box-shadow: 0 5px 20px 0 rgba(41,42,51,.14);

& .user_avatar{
    width: 82px;
    height: 82px;
    border-radius: 100%;
    margin-top: -30px;
    margin-right: 5em;
    border: 1px solid #00000014;
    padding: .2em;
    box-shadow: 0px 0px 2px #bbb;
}

& .btn{
    background: #3F51B5;
    color: #fff;
    outline: none;
    border: none;
    padding: .5em .9em;
    border-radius: 20px;
    margin-top: 0.25em;
    cursor:pointer;
    transition:all .5s;
    :hover{

        background:#5765b6;
    }
    
}
& .settingIcon{
    font-size: 1.4em;
    padding-top: 5px;
}
& .channelName{
    margin: 1.1em .8em;
}
.user_information{
    display:flex;
    justify-content:space-between;
}

& .video_statistics{
    display: flex;
    height: 42px;
    align-content: center;
    align-items: center;
    div{
        padding: 1em 2em 1em 3em;
        text-align:center;
    }
    b{
        display: block;
    }
}
`;


function ChannelInfoBar({data}){
    return (
        <ChannelInfoWrapper>
            <Grid className="user_information" container>
                <Grid item className="user_information">

        <img className="user_avatar" src={data.user.avatar} alt="تصویر کاربر" />
            <p className="channelName">{data.channel.name}</p>
            <div>
            <button className="btn">
                <SettingIcon className="settingIcon" />
                تنظیمات
            </button>
            </div>
            </Grid>
            <Grid item className="video_statistics">
            <div>
    <b>{data.channel.video_views}</b>
                        تعداد بازدید
                    </div>

                    <div>
    <b>{data.channel.videos_count}</b>
                        تعداد ویدئو ها
                    </div>
            </Grid>

            </Grid>
           
        </ChannelInfoWrapper>
    );

}
ChannelInfoBar.propTypes ={
    data:PropTypes.object.isRequired,
}

export default memo(ChannelInfoBar);