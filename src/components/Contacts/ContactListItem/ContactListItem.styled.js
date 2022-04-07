import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  /* padding: 15px 10px; */
  &:not(:last-child) {
    margin-bottom: 7px;
  }
  &:hover,
  &:focus {
    border-radius: 3px;
    box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.09);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ContactText = styled.p`
  font-size: 17px;
  color: black;
`;

export const DeleteBtn = styled.button`
  height: 22px;
  padding: 2px 2px;
  /* background-color: #fff; */
  background-color: transparent;
  /* border: 1px solid rgba(95, 4, 91, 0.329); */
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: black;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
