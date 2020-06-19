import styled from 'styled-components';

export const Component = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin: 1rem 1rem 2.5rem;
  background: ${({ theme }): any => theme.black};

  &:before {
    content: "${({ theme }): any => theme.black}";
    position: absolute;
    bottom: -1.5rem;
    text-align: center;
    text-transform: uppercase;
    font-family: sans-serif;
    width: 100%;
  }
`;
