import React from "react";
import { Fragment } from "react";
import Menu from '../components/Menu/index';
import FeedbackMsg from "../components/FeedbackMsg";

const Subscription = () => {
  return(
    <Fragment>
      <Menu variant='confirm' />
      <FeedbackMsg />
    </Fragment>
  )
}

export default Subscription;