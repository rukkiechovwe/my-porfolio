import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Text = styled.span`
  color: ${(props) => props.theme.textColor};
  z-index: 99;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>©2023 </Text>
      <Text>Designed with ❤️</Text>
    </Container>
  );
};

export default Footer;
