import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  padding: 30px 10px;
`;

export const MainText = styled.p`
  text-align: center;
  font-size: 30px;
  padding-bottom: 10px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  text-align: center;
  min-width: 80px;
  padding: 3px 7px;
  margin-left: 7px;
  margin-right: 7px;
  color: black;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    border-radius: 50px;
    background-color: black;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      border-radius 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
