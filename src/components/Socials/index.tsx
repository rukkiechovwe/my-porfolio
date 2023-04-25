import { FC } from "react";
import { Moon, SunDim } from "phosphor-react";
import { useThemeContext } from "../../context/theme_context";
import * as S from "./styles";
import { ISocials } from "../../utils/interfaces";

type Props = {
  socials: ISocials;
};

const Socials: React.FC<Props> = ({ socials: { urls } }) => {
  const { darkMode, toggleTheme } = useThemeContext();
  return (
    <S.Container>
      <S.LinkGroup>
        <S.Line />

        {urls.map(({ icon, url, title }) => (
          <S.ListItem key={title}>
            <S.Link href={url} target="_blank">
              {icon}
            </S.Link>
          </S.ListItem>
        ))}
        <S.ListItem onClick={(_e) => toggleTheme?.()}>
          {darkMode ? <SunDim size={24} /> : <Moon size={24} />}
        </S.ListItem>
      </S.LinkGroup>
    </S.Container>
  );
};


export default Socials;
