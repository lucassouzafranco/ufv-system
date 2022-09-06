import React from 'react';
import styled from 'styled-components';
import ufv from '../../assets/img/ufv_pb.png';

const BackgroundHome = styled.div`
  background-image: url(${ufv});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  opacity: 0.90;
  display: flex;
`;

export default BackgroundHome;