import { FC, useState } from "react";
import Image from "next/Image";
import * as S from "./styles";

const navItems = ["/", "About", "Experience", "Project", "Contact"];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Bar>
        <Image src="/assets/images/logo1.png" alt="" width="30" height="30" />
        <S.OpenMenu onClick={() => setIsOpen(true)}>
          <span />
          <span />
        </S.OpenMenu>
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
