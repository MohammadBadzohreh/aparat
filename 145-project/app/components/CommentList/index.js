import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import CommentCard from 'components/CommentItem';
import CommentItem from 'components/CommentItem';
import { createStructuredSelector } from 'reselect';
import { makeSelectAddedComment } from 'containers/App/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Loading from 'components/Loading';

const CommentListWrapper = styled.div``;
function CommmentList({ comments ,addedComment }){
    return (
        <CommentListWrapper className={addedComment.params ? "loading" : ""}>
      {comments && comments.data && comments.data.map(data => <CommentItem key={data.id} data={data}  />)}
        { addedComment.params  && <Loading />  }
        </CommentListWrapper>

    );
}
CommmentList.prototype={
  comments: propTypes.object,
  addedComment:propTypes.object,
}

const mapStateToProps = createStructuredSelector({
      addedComment : makeSelectAddedComment(),
});

const withStore = connect(mapStateToProps);
export default withStore(CommmentList);