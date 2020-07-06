import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: block;
  width: 10%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 15% 0 0 0;
  margin-right: .5rem;
`;

export const ImageRelatve = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ImageComponent = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};

  @media(max-width: 420px) {
    max-height: 5rem;
    max-width: 10rem;
  }
`;