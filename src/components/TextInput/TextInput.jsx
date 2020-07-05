import styled from 'styled-components';

export const TextInput = styled.input`
  height: 2.5rem;
  width: 20rem;
  border: 1px solid #228c9c;
  border-radius:3px;
  color: #877474;
  font-size: 1rem;
  outline: none;

  &:hover {
    border: 1px solid #107d8c;
  }

  &:focus {
    border: 2px solid #107d8c;
  }
`;