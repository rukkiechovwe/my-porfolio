import { MouseEventHandler } from "react";
import styled from "styled-components";

export const SButton = styled.button<IButton>`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
  border-radius: 0.5rem;
  padding: 0 1.5rem;
  border: none;
  min-height: 50px;
  min-width: ${(props) => props.width || "178px"};
  background-color: ${(props) =>
    props.isPrimary ? props.theme.buttonPrimaryColor : props.theme.buttonColor};
  color: ${(props) => (props.isPrimary ? "#fff" : props.theme.textColor)};
  transition: 1s ease;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.buttonHoverTextColor};
    background-color: ${(props) => props.theme.buttonHoverColor};
  }
`;

interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  isPrimary?: boolean;
  width?: string;
  href?: string;
  as?: "a";
  children: React.ReactNode | string;
}

const Button: React.FC<IButton> = ({ children, onClick, isPrimary, width }) => {
  return (
    <SButton onClick={onClick} isPrimary={isPrimary} width={width}>
      {children}
    </SButton>
  );
};

export const AnchorButton: React.FC<IButton> = ({
  children,
  isPrimary,
  width,
  href,
}) => {
  return (
    <SButton as="a" href={href} isPrimary={isPrimary} width={width}>
      {children}
    </SButton>
  );
};

export default Button;
