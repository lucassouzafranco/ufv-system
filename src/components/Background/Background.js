import React from 'react';
import styled from 'styled-components';
import ufv from '../../assets/img/ufv.jpg';

const BackgroundHome = styled.div`
  background-image: url(${ufv});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  height: 100vh;
  opacity: 0.90;
`;

export default BackgroundHome;