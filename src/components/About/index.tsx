import { IAbout } from "../../utils/interfaces";
import * as S from "./styles";

type Props = {
  about: IAbout;
};

const About: React.FC<Props> = ({
  about: { name, bio, email, resumeUrl, skills },
}) => {
  return (
    <S.Container>
      <S.HeaderText>
        Hi I&#39;m <S.ColoredText>{name}</S.ColoredText>
      </S.HeaderText>
      <S.ParaText>
        {bio} If you&#39;re hiring,
        <S.ColoredLinkText href={`/${resumeUrl}`}>
          {" Download my resume "}
        </S.ColoredLinkText>
        and let&#39;s
        <S.ColoredLinkText href={`mailto:${email}`}>
          {" chat! 📧"}
        </S.ColoredLinkText>
      </S.ParaText>

      {skills.map((item, i) => (
        <S.SkillContainer key={i}>
          <S.SkillTitleText>{item.title}:</S.SkillTitleText>

          <div style={{marginTop:"10px", width:"100%"}}>
            {item.list.map((skill, index) => (
              <S.SkillItem key={index}>
                <S.DataNameText>{skill.name}:</S.DataNameText>
                <div>
                  {skill.data.map((data, i) => (
                    <S.SkillText key={i}>{data}</S.SkillText>
                  ))}
                </div>
              </S.SkillItem>
            ))}
          </div>
        </S.SkillContainer>
      ))}

      <S.BoltImage src="/assets/images/bolt.png" />
      <S.HandSignImage src="/assets/images/okay-hand.png" />
    </S.Container>
  );
};

export default About;
