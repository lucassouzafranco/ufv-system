import React, { Fragment } from "react";
import './styleFeedbackMsg';
import styled from "styled-components";
import {Area} from './styleFeedbackMsg';
import Card from '../Card/Card';

const FeedbackMsg = () => {
  return(
    <Fragment>
      <Area>
        <Card variant='confirm' />
      </Area>
    </Fragment>
  )
}

export default FeedbackMsg;