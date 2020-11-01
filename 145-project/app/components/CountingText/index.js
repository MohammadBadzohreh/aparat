/**
 *
 * CountingText
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';
const CountingTextWrapper = styled.div`
  & {
    margin-top: 10px;
    text-align: left;
    .btn {
      border-radius: 2em;
      margin-right: 0.3em;
      margin-top: 4px;
      &.btn-accept {
        color: #efefef;
        background: #4868e4;
        transition: all 0.3s;
        :hover {
          background: #6981de;
        }
        :disabled {
          background: #4868e491 !important;
        }
      }
    }
    & .remainLength{
      float: right;
      margin-top: 8px;
    }
  }
`;

function CountingText({ defulatValue, maxLength, onChange, onCancel }) {
    const [value , setValue] = useState(defulatValue);
    const remain = maxLength - value.length;
    function handleChange(){
      onChange(value);
    }

  function handleChangeValue(e){
    setValue(e.target.value.trim());
   }
   function handleDisabledAccept(){
     if(remain > -1)
     return true;
     return false;
   }
  return (
    <CountingTextWrapper>
      <TextField fullWidth multiline value={value}
       rows={4} variant="outlined" onChange={handleChangeValue} />
      <Button className="btn" onClick={onCancel}>انصراف</Button>
      <Button className="btn btn-accept" onClick={handleChange} disabled={remain > -1 ? false : true}>تایید</Button>
      <span className="remainLength">
        {remain > -1 ?
        `${remain}کاراکتر باقیمانده`
        :
        "رشته بیشتر از حد مجاز است."
        }
      </span>
    </CountingTextWrapper>
  );
}

CountingText.propTypes = {
  defulatValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
};
CountingText.defaultProps = {
  defulatValue: '',
  maxLength: 150,
};

export default memo(CountingText);
