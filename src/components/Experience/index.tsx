import { useState } from "react";
import { IExperience } from "../../utils/interfaces";
import * as S from "./styles";
import { FloatText, ColoredText } from "../../styles/commonstyles";


type Props = {
  experience: IExperience;
};

const Experience: React.FC<Props> = ({ experience: { tag, experiences } }) => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <S.EContainer id={tag}>
      <FloatText>
        Where I have <ColoredText>worked.</ColoredText>
      </FloatText>
      <S.EperienceContainer>
        <S.Tabs>
          {experiences.map((experience, index) => (
            <S.TabItem
              active={index === currentItem ? true : false}
              key={index}
              onClick={() => setCurrentItem(index)}
            >
              <p> {experience.companyName}</p>
            </S.TabItem>
          ))}
        </S.Tabs>
        {experiences.map(
          (experience, index) =>
            currentItem === index && (
              <S.TabContent key={experience.companyName}>
                <S.ExperienceTitle>
                  {experiences[currentItem].jobTitle}
                  <S.ExperienceCompany>
                    {" "}
                    @ {experiences[currentItem].companyName}
                  </S.ExperienceCompany>
                </S.ExperienceTitle>
                <S.ExperienceDuration>
                  {experiences[currentItem].duration}
                </S.ExperienceDuration>
                <S.WorkDoneList>
                  {experiences[currentItem].workDone.map((item, index) => (
                    <S.WorkDoneItem key={index}>{item}</S.WorkDoneItem>
                  ))}
                </S.WorkDoneList>
              </S.TabContent>
            )
        )}
      </S.EperienceContainer>
    </S.EContainer>
  );
};

export default Experience;
