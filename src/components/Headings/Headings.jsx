import styled from 'styled-components';

export const HeadingMain = styled.h1`
  color: #228c9c;
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  width: fit-content;
`;
export const SubHeading = styled.h2`
  color: #228c9c;
  font-size: 1.3rem;
  padding: 1rem;
  text-align: center;
  width: fit-content;
`;

export const HeadingFancy = styled.h2`
  padding: 1rem;
  color: white;
  background: hsl(0, 50%, 45%);
  text-shadow: 1px 1px black, 2px 2px black,
  3px 3px black, 4px 4px black, 5px 5px black; 
  box-shadow: 2px 3px 3px #999;
  max-width: 75%;
`;

export const HeadingError = styled.h3`
  color: red;
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  width: fit-content;
`;