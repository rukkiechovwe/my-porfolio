import styled from "styled-components";
import { SideLine } from "../../styles/commonstyles";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: fit-content;
  display: block;
  width: fit-content;
  z-index: 99;
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.span`
  font-size: 16px;
  text-align: center;
  color: white;
  font-weight: 200;
`;

export const LinkGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
  padding: 0;
`;

export interface IListItem {
  active?: boolean;
}

export const ListItem = styled.li<IListItem>`
  margin: 0 20px;
  padding: 5px 0;
   color: ${(props) => props.theme.textColor};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    color: ${(props) => props.theme.highlightTextColor};
    
`;

export const Link = styled.a<IListItem>`
  display: block;
  padding: 5px 0;
  text-decoration: none;
  text-transform: capitalize;
  transition: 1s ease;
  font-size: 16px;
  text-align: left;
  color: ${(props) =>
    props.active ? props.theme.buttonHoverTextColor : props.theme.textColor};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    color: ${(props) => props.theme.highlightTextColor};
    text-decoration: underline;
  }
`;

export const Line = styled(SideLine)`
  margin: 0 0 20px;
`;
