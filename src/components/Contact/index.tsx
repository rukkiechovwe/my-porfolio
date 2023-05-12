import { IContact } from "../../utils/interfaces";
import { AnchorButton } from "../Button";
import * as S from "./styles";
import { FloatText, ColoredText } from "../../styles/commonstyles";


type Props = {
  contact: IContact;
};

const Contact: React.FC<Props> = ({ contact: { tag, email, urls } }) => {
  return (
    <S.CContainer id={tag}>
      <FloatText>
        Say <ColoredText>Hi!</ColoredText>
      </FloatText>
      <S.SpaceY space="10px" />

      <S.SpanText>
        Don&#39;t be a stranger 👀 :), I&#39;m looking to connect and meet new
        people in tech, If you&#39;re a developer, designer or in need of my
        services, connect with me on social media or download my resume and
        let&#39;s chat!
      </S.SpanText>
      <S.SpaceY space="40px" />
      <S.ButtonContainer>
        {urls.map(({ icon, url, title }, i) => (
          <S.ButtonWrapper key={[title, i].join(".")}>
            <AnchorButton width="124px" href={url}>
              {icon}
              {title}
            </AnchorButton>
          </S.ButtonWrapper>
        ))}
      </S.ButtonContainer>

      <S.ResumeContainer>
        {urls.map(
          ({ icon, url, title }, i) =>
            title === "Resume" && (
              <S.ButtonWrapper key={[title, i].join(".")}>
                <AnchorButton width="124px" href={url}>
                  {icon}
                  {title}
                </AnchorButton>
              </S.ButtonWrapper>
            )
        )}
      </S.ResumeContainer>
    </S.CContainer>
  );
};

export default Contact;
