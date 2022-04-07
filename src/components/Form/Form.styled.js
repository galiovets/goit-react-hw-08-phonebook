import styled from 'styled-components';

export const FormStyled = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  margin-bottom: 20px;
  /* padding: 20px; */
  padding: 10px;
  /* background-color: rgba(50, 50, 250, 0.18); */
  background-color: transparent;
  /* border: 1px solid rgba(129, 4, 123, 0.12); */
  /* border-radius: 20px; */
  /* box-shadow: 8px 8px 19px 0px rgba(34, 60, 80, 0.12); */
`;

export const FormLabel = styled.label`
  font-size: 17px;
  letter-spacing: 0.03em;
  display: block;
  color: black;
`;

export const FormInput = styled.input`
  font-size: 17px;
  display: block;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  /* background-color: white; */
  background-color: transparent;
  color: black;
  /* border-radius: 8px; */
  border: none;
  border-bottom: 1px solid black;
  /* border-radius: 5px; */
  /* border: 1px solid black; */
  /* outline: none; */
  &::placeholder {
    color: black;
  }
  &:hover,
  &:focus {
    /* outline: 1px solid rgba(129, 4, 123, 0.12); */
    outline: none;
    border-radius: 3px;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.09);
  }
`;

export const AddButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 17px;
  text-align: center;
  min-width: 80px;
  padding: 7px 10px;
  margin-top: 20px;
  /* background-color: #fff; */
  color: black;
  background-color: transparent;
  /* border: 2px solid rgba(95, 4, 91, 0.329); */
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    background-color: black;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    /* color: black;
    background-color: transparent;
    transition: background-color 300ms ease; */
  }
`;
