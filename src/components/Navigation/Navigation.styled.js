import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  padding: 3px;
  font-weight: 500;
  font-size: 20px;
  margin-right: 25px;
  color: black;
  &.active {
    border-bottom: 1px black solid;
  }
`;
