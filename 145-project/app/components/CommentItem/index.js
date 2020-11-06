import React, { useState,memo } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Person as UserIcon} from '@material-ui/icons';
import { getAge } from 'utils/helpers';
import { COMMENT_STATE_ACCEPTED } from 'utils/constants';
import CountingText from 'components/CountingText';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addCommentsAction, deleteCommentsAction } from 'containers/App/actions';
import { makeSelectAddedComment } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';

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
        .commentAge{
            display:inline-block;
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
    height:120px;
    > img{
        width:100%;
        height:100%;
    }
}

.user-avatar{
    width:30px;
    height:30px;
}
`

function CommentItem({data,isSubItem,handleAddComment , handleDeleteComment}){
    const [showAnswerCard,setShowAnswerCard] = useState(false);
    function handleChangeAnswer(value){
       if(value){
           handleAddComment({"video_id":data.video_id,"body":value,"parent_id":data.id});
       }
    }
    function deleteComment(){
        handleDeleteComment(data.id);
    }
return(
    <CommentItemWrapper>
        <div className="user">
            <img className="user-avatar" src={data.user.avatar} alt="تصویر کاربر" />

        </div>
        <div className="content">
            <div className="header">
            <b>{data.user.name}</b>
            <div className="commentAge">
            <span>{getAge(data.createdAge)}</span>
            </div>
            </div>
            <div className="body">
                {data.body}
            </div>
            <div className="footer">
                {
                    ! isSubItem && (
                        <Button className="btn btn-answer" onClick={()=>setShowAnswerCard(!showAnswerCard)}>پاسخ</Button>
                    )
                }
                {
                    data.state !== COMMENT_STATE_ACCEPTED && (
                        <Button className="btn btn-accept">تایید دیدگاه</Button>
                    )
                }
                <Button className="btn btn-delete" onClick={deleteComment}>حذف دیدگاه</Button>
                {
                    showAnswerCard && <CountingText onChange={handleChangeAnswer} onCancel={()=>setShowAnswerCard(false)} maxLength={5} />
                }
            </div>
            {
                !!(data.children && data.children.length) && data.children.map(item=> <CommentItem key={item.id} data={item} isSubItem handleDeleteComment={handleDeleteComment} />)
            }
        </div>
        {
            !isSubItem && (
                <div className="banner">
                <img src={data.video_banner ? 
                data.banner_path + data.video_banner
                : data.banner_path  + "../../images/no-item.png"}
                alt="تصویر ویدئو"
                />
            </div>
            )
        }
       
   
    </CommentItemWrapper>
)
}
CommentItem.prototype={
    data: propTypes.object,
    isSubItem:propTypes.bool,
    handleAddComment:propTypes.func.isRequired,
    handleDeleteComment: propTypes.func.isRequired,
  }
CommentItem.defaultProps={
    isSubItem:false,
}




function mapDispatchToProps(dispatch){
    return {
        handleAddComment : (data) => dispatch(addCommentsAction(data)),
        handleDeleteComment: (comment_id) => dispatch(deleteCommentsAction(comment_id)),
    }
}

const withStore = connect(undefined,mapDispatchToProps);

export default  compose(memo,withStore)(CommentItem);