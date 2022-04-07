import styled from 'styled-components';

// export const Container = styled.div``;

export const UserText = styled.span`
  text-decoration: none;
  padding: 3px;
  font-weight: 500;
  font-size: 20px;
  margin-right: 25px;
  color: black;
`;

export const Button = styled.button`
  font-size: 17px;
  text-align: center;
  min-width: 80px;
  padding: 7px 10px;
  color: black;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    background-color: black;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
