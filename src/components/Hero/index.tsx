import { IHero } from "../../utils/interfaces";
import { scrollTo } from "../../utils/scroll";
import Button from "../Button";
import * as S from "./styles";

type HeroProps = {
  hero: IHero;
};

const Hero: React.FC<HeroProps> = ({ hero: { text,desc,greeting, catchPhrase } }) => {
  return (
    <S.Container>
      <S.Greetings>
        <S.ColoredText> {greeting}</S.ColoredText>
      </S.Greetings>
      <S.HeaderText>
        {text} {catchPhrase}
      </S.HeaderText>
      <S.DescText> {desc}</S.DescText>
      {/* <S.SpiralImage src="/assets/images/spiral2.png" /> */}
      {/* <S.SpiralImage1 src="/assets/images/spiral1.png" /> */}
      {/* <S.StarfishImage src="/assets/images/bitmoji.png" /> */}
      {/* <S.Bitmoji src="/assets/images/bitmoji.png" /> */}
      <Button isPrimary onClick={(_e) => scrollTo("about")} >
        Learn More
      </Button>
    </S.Container>
  );
};

export default Hero;
