import styled from "styled-components";
import { SideLine } from "../../styles/commonstyles";

export const Container = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: end;

  @media only screen and (min-width: 769px) {
    padding: 0;
    position: fixed;
    right: 0;
    bottom: 0;
    height: fit-content;
    width: fit-content;
    z-index: 99;
  }
`;

const Menu = styled.div`
  display: block;
  color: #fff;
  width: fit-content;
  align-self: end;
  cursor: pointer;

  & span {
    height: 3px;
    background: #fff;
    display: block;
    margin: 7px 5px;
    border-radius: 5px;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const OpenMenu = styled(Menu)`
  color: #fff;

  & span:first-child {
    width: 30px;
  }
  & span:last-child {
    width: 23px;
  }
`;

export const CloseMenu = styled(Menu)`
  padding: 20px 10px;

  & span:first-child {
    transform: rotate(45deg) translateY(7px);
  }
  & span:last-child {
    transform: rotate(-45deg) translateY(-7px);
    width: 23px;
  }
`;

export interface ILinkGroup {
  open: boolean;
}

export const LinkGroup = styled.ul<ILinkGroup>`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    position: fixed;
    background: #000;
    z-index: 999;
    top: 0;
    left: 0;
    overflow: hidden;
    min-height: 100vh;

    width: ${(props) => (props.open ? "100%" : "0%")};
    height: ${(props) => (props.open ? "100%" : "0")};
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    opacity: ${(props) => (props.open ? "1" : "0")};
    transition: width 500ms ease;
  }
`;

export interface IListItem {
  active?: boolean;
}

export const ListItem = styled.li`
  margin: 0 20px;
  padding: 10px 0;
`;

export const Link = styled.a<IListItem>`
  display: block;
  padding: 10px 0;
  text-decoration: none;
  text-transform: capitalize;
  transition: 1s ease;
  font-size: 16px;
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.buttonHoverTextColor : props.theme.textColor};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    color: ${(props) => props.theme.highlightTextColor};
    text-decoration: underline;
    @media only screen and (min-width: 768px) {
      text-align: left;
    }
  }
`;

export const Line = styled(SideLine)`
  margin: 20px auto 0;
`;
