import { useRouter } from "next/dist/client/router";
import styled, { keyframes } from "styled-components";
import { SButton } from "./Button";
import { ITheme } from "../utils/interfaces";

const bounce = keyframes`
  from {
      opacity: 1;
    transform: transalte(0);
  }
  to {
    opacity: 1;
    transform: translateY(-20px);
  }
`;

const ScrollHeroButton = styled(SButton)`
  position: absolute !important;
  inset: auto auto 30px auto;
  min-width: fit-content;
  min-height: fit-content;
  border-radius: 50%;
  opacity: 0;
  animation: ${bounce} 2s alternate infinite;
  animation-delay: 5s;
  background: ${(props) => (props.theme as ITheme).highlightTextColor};
  padding: 8px;

  & svg {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 600px) {
    padding: 15px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollButton = styled(SButton)`
  margin-top: 50px;
  min-width: fit-content;
  min-height: fit-content;
  border-radius: 50%;
  animation: ${bounce} 2s alternate infinite;
  background: ${(props) => (props.theme as ITheme).highlightTextColor};
  padding: 8px;

  & svg {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 600px) {
    padding: 13px;

    & svg {
      width: 28px;
      height: 28px;
    }
  }
`;

interface IScrollTo {
  link?: string;
}

const ScrollTo: React.FC<IScrollTo> = ({ link }) => {
  const router = useRouter();

  return link === "about" ? (
    <ScrollHeroButton
      className="scroll_btn"
      onClick={(_e) => router.replace(`/${link}`)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="inherit"
        height="inherit"
        fill="#ffffff"
        viewBox="0 0 256 256"
      >
        <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
      </svg>
    </ScrollHeroButton>
  ) : (
    <ButtonWrapper>
      <ScrollButton
        className="scroll_btn"
        onClick={(_e) => router.replace(`/${link}`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </ScrollButton>
    </ButtonWrapper>
  );
};

export default ScrollTo;
