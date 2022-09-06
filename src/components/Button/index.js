import React from "react";
import { Button as ButtonC } from './style';

export default function Button({ children }) {
  return (
    <ButtonC>
      {children}
    </ButtonC>
  )
}