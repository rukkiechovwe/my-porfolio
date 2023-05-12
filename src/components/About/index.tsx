import { IAbout } from "../../utils/interfaces";
import * as S from "./styles";

import { FloatText, ColoredText } from "../../styles/commonstyles";

type Props = {
  about: IAbout;
};

const About: React.FC<Props> = ({ about: { tag, name, bio, skills } }) => {
  return (
    <S.AContainer id={tag}>
      <S.AboutContainer>
        <FloatText>
          A little bit <ColoredText>about me.</ColoredText>
        </FloatText>

        <S.ParaText dangerouslySetInnerHTML={{ __html: bio }}></S.ParaText>
      </S.AboutContainer>
      {skills.map((item, i) => (
        <S.SkillContainer key={i}>
          {/* <S.SkillTitleText>{item.title}:</S.SkillTitleText> */}
          <S.SkillList>
            {item.list.map((skill, index) => (
              <S.SkillItem key={[skill, index].join(".")}>
                <S.DataNameText>{skill.name}:</S.DataNameText>
                <S.SkillText>{skill.data.join(", ")}</S.SkillText>
              </S.SkillItem>
            ))}
          </S.SkillList>
        </S.SkillContainer>
      ))}
    </S.AContainer>
  );
};

export default About;
