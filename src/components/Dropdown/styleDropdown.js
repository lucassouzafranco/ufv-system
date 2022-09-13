import styled from "styled-components";

export const Dropdown = styled.div`
  width: 100%;
  height: auto;
  padding: 0 0.6em;
  position: relative;
`

export const Text = styled.div`
  font-size: 10pt;
  font-weight: 400;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #111;
`

export const DropdownContent = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
  position: absolute;
  background-color: #fff;
  padding: 0.6em;
  border-radius: 10px;
  bottom: auto;
  top: 35px;
  overflow-y: scroll;
`

export const Item = styled.div`
  font-size: 10pt;
  font-weight: 400;
  padding: 5px;
  width: 100%;
  color: #111;
  cursor: pointer;
  transition: all .2s;
  border-radius: 5px;
  &:hover{
    background-color: #f4f4f4;
  }
`

export const Search = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background: none;
  box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
  padding: 0.4em;
  margin-bottom: 0.3em;
  border-radius: 5px;
`