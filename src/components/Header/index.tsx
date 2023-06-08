import { FC, useState } from "react";
import { Moon, SunDim } from "phosphor-react";
import Image from "next/image";

import * as S from "./styles";
import { useThemeContext } from "../../context/theme_context";
import { useRouter } from "next/router";

const navItems = ["/", "About", "Experience", "Project", "Contact"];

const Header: FC = () => {
  const router = useRouter()
  const { darkMode, toggleTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Bar>
        <Image src="/assets/images/logo1.png" alt="" width="30" height="30" />
        <S.ThemeWrapper>
          <S.Theme onClick={(_e) => toggleTheme?.()}>
            {darkMode ? <SunDim size={24} /> : <Moon size={24} />}
          </S.Theme>
          <S.OpenMenu onClick={() => setIsOpen(true)}>
            <span />
            <span />
          </S.OpenMenu>
        </S.ThemeWrapper>
      </S.Bar>
      <S.LinkGroup open={isOpen}>
        <S.CloseMenu onClick={() => setIsOpen(false)}>
          <span />
          <span />
        </S.CloseMenu>
        {navItems.map((link, i) =>
          i === 0 ? (
            <S.ListItemImg key={[link, i].join(".")}>
              <S.StyledLink
                href={link}
                // onClick={() => {
                //   setIsOpen(false);
                // }}
              >
                <Image
                  src="/assets/images/logo1.png"
                  alt=""
                  width="30"
                  height="30"
                />
              </S.StyledLink>
            </S.ListItemImg>
          ) : (
            <S.ListItem key={[link, i].join(".")}>
              {/* fix reload issue here  */}

              <S.StyledLink
                href={link.toLowerCase()}
                className={
                  router.pathname === `/${link.toLowerCase()}` ? "active" : ""
                }
                // onClick={() => {
                //   setIsOpen(false);
                // }}
              >
                {link}
              </S.StyledLink>
            </S.ListItem>
          )
        )}
        <S.Line />
      </S.LinkGroup>
    </S.Container>
  );
};

export default Header;
