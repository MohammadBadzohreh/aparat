import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import CommentCard from 'components/CommentItem';
import CommentItem from 'components/CommentItem';

const CommentListWrapper = styled.div``;
function CommmentList({ comments }){
  console.log(comments);
    console.log(comments);
    return (
        <CommentListWrapper>
      {comments && comments.data && comments.data.map(data => <CommentItem key={data.id} data={data}  />)}
        </CommentListWrapper>
    );
}
CommmentList.prototype={
  comments: propTypes.object,
}
export default CommmentList;