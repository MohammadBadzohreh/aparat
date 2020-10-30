import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Person as UserIcon} from '@material-ui/icons';
import { getAge } from 'utils/helpers';

const CommentItemWrapper = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;
border:1px solid #eee;
box-shadow:2px 2px 4px 0px #ddd;
border-radius:.2em;
margin-top:1em;
padding: 1em 1.2em;

& .user{
    width:40px;
    .MuiSvgIcon-root{
        color: #999;
        border: 1px solid #eee;
        font-size: 1.8em;
        border-radius: 50%;
        background: #fff;
        margin: auto;
        display: block;
    }
}


& .content{
    width:100%;
    margin: .2em .5em;
    .header{
        b{
            color:e0e0e;
            font-weight:bold;
            font-size:12px;
            margin-left: .8em;
        }
        span{
            font-size:10px;
            font-weight:300;
            direction:ltr;
            text-align:right;
        }
    }
    .body{
        margin: .8em .1em;        
    }
    .footer{
        .btn{
            border-radius:2em;
            margin-right:.3em;
        }
        .btn-accept{
            color: #efefef;
            background: #4868e4;
            transition:all .3s;
            :hover{
                background: #6981de;
            }
          
        }
        .btn-delete{
            border: 1px solid #ccc
        }
    }
}
.banner{
    width:180px;
    > img{
        width:100%;
        height:100%;
    }
}
`

function CommentItem({data}){
return(
    <CommentItemWrapper>
        <div className="user">
            <UserIcon />

        </div>
        <div className="content">
            <div className="header">
            <b>{data.user.name}</b>
            <span>{getAge(data.createdAge)}</span>
            </div>
            <div className="body">
                این یک کامنت است برای یک ویدیو
            </div>
            <div className="footer">
                <Button className="btn btn-answer">پاسخ</Button>
                <Button className="btn btn-accept">تایید دیدگاه</Button>
                <Button className="btn btn-delete">حذف دیدگاه</Button>
            </div>
        </div>
        <div className="banner">
            <img src={data.video_banner ? 
            data.banner_path + data.video_banner
            : data.banner_path  + "../../images/no-item.png"}
            alt="تصویر ویدئو"
            />
        </div>
   
    </CommentItemWrapper>
)
}
CommentItem.prototype={
    data: propTypes.object,
  }
export default CommentItem;