import React from "react";
import { Button as ButtonC } from './styleButton';

export default function Button({ children }) {
  return (
    <ButtonC>
      {children}
    </ButtonC>
  )
}