import styled from "styled-components";

const Container = styled.div`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;

  @media only screen and (min-width: 570px) {
    padding: 0 2.54rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 0 3.54rem;
    max-width: 650px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 0 5.54rem;
    max-width: 991px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 7.54rem;
  }
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
