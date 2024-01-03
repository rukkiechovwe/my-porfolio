import styled from "styled-components";
import Link from "next/link";

import { SideLine } from "../../styles/commonstyles";
import Image from "next/image";

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

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div:first-child {
    background: ${(props) => props.theme.bgImageColor};
  }

  img {
    @media only screen and (min-width: 768px) {
      display: none !important;
    }
  }
`;

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  div:first-child {
    background: transparent;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const Theme = styled.div`
  color: ${(props) => props.theme.headerTextColor};
  margin: 0 0 -7px;
`;

const Menu = styled.div`
  display: block;
  color: ${(props) => props.theme.headerTextColor};
  width: fit-content;
  align-self: end;
  cursor: pointer;

  & span {
    height: 3px;
    background: ${(props) => props.theme.headerTextColor};
    display: block;
    margin: 7px 5px;
    border-radius: 5px;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const OpenMenu = styled(Menu)`
  color: ${(props) => props.theme.headerTextColor};
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
    background: ${(props) => props.theme.bgColor};
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

export const LogoImage = styled(Image)`
  border-radius: 50%;
`;

export interface IListItem {
  active?: boolean;
}

export const ListItem = styled.li<IListItem>`
  margin: 0 20px;
  padding: 10px 0;
`;

export const ListItemImg = styled(ListItem)`
  margin: 0 auto;
  cursor: pointer;
  padding: 0;

  a{
    padding 4px 4px 0px !important;
  }
`;

export const StyledLink = styled(Link)<IListItem>`
  display: block;
  padding: 13px 0;
  text-decoration: none;
  text-transform: capitalize;
  transition: 1s ease;
  font-size: 16px;
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.buttonHoverTextColor : props.theme.textColor};

  @media only screen and (min-width: 769px) {
    font-size: 14px;
    padding: 8px 0;
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    color: ${(props) => props.theme.highlightTextColor};
    text-decoration: underline;
  }

  &.active {
    color: ${(props) => props.theme.highlightTextColor};
  }
`;

export const Line = styled(SideLine)`
  margin: 20px auto 0;
`;
