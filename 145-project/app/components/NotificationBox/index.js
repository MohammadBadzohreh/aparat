/**
 *
 * NotificationBox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Close as CloseIcon} from "@material-ui/icons";


export const NOTIFICATION_TYPE_WARNING = "warning";
export const NOTIFICATION_TYPE_ERROR = "error";
export const NOTIFICATION_TYPE_SUCCESS = "success";
export const NOTIFICATION_TYPE_INFO = "info";

export const NOTIFICATION_TYPES = [
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_INFO,
  NOTIFICATION_TYPE_ERROR,
];
const NotificationBoxWrapper = styled.div`
position: fixed;
bottom: 1em;
left: 1em;
display: inline-block;
padding: 1em 2em;
border-radius: 5em;
overflow:hidden;
box-shadow: 0px 2px 3px #909090;
&.${NOTIFICATION_TYPE_SUCCESS}{
  color: #fff;
  background: #03b64e;
}
&.${NOTIFICATION_TYPE_ERROR}{
  color: #fff;
background: #e06f6f;
}
&.${NOTIFICATION_TYPE_WARNING}{
  color: #555;
  background: #cdcd16;

}
&.${NOTIFICATION_TYPE_INFO}{
  color: #fff;
  background: #6086e2;
}
& .body{
  white-space: pre;
}
& .iconWrapper{
  position:absolute;
  background:green;
  width:100%;
  height:100%;
  top:0;
  right:0;
  left:0;
  background:rgba(150,150,150,.35);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity:0;
  transition: ease .5s;
  cursor:pointer;
}
:hover{
  & .iconWrapper{
    opacity:1;
  }
}
`;

function NotificationBox({title,type}) {
  return <NotificationBoxWrapper className={type}>
    <p className="body">{title.trim()}</p>
    <div className="iconWrapper">
    <CloseIcon className="icon" />
    </div>
    
  </NotificationBoxWrapper>
      ;
}

NotificationBox.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(NOTIFICATION_TYPES),
};
NotificationBox.defaultProps = {
  title : `
  این متنی هست که قراره باشه
  `,
  type: NOTIFICATION_TYPE_WARNING,
};

export default memo(NotificationBox);
