import styled from "styled-components";

export const SideLine = styled.div`
  background: ${(props) => props.theme.textColor};
  height: 200px;
  width: 2px;
  align-self: center;
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
