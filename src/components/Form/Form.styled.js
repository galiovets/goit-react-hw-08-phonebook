import styled from 'styled-components';

export const FormStyled = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: transparent;
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
  background-color: transparent;
  color: black;
  border: none;
  border-bottom: 1px solid black;
  &::placeholder {
    color: black;
  }
  &:hover,
  &:focus {
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
