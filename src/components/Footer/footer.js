import React, { Fragment } from "react";
import './styleFooter';
import { Layout } from "./styleFooter";
import ufvLogo from '../../assets/img/ufv-logo.png';

const Footer = () => {
  return(
    <Fragment>
        <Layout src={ufvLogo}/>
    </Fragment>
  )
}

export default Footer;