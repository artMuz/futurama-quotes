import styled from 'styled-components';

export const Button = styled.button`
  background-color: #77b0b7;
  border: none;
  border-radius: 3px;
  color: hsl(0, 50%, 45%);
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem;
  height: 2.5rem;
  width: 7rem;
  outline: none;
  cursor: pointer;
  box-shadow: 0 3px 1px #999;
  
  &:hover {
    background-color: #5da5ad;
  }

  &:active {
    box-shadow: 0 1px 1px #666;
    transform: translateY(2px);
  }
`;