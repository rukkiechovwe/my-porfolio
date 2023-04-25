import { FC, useState } from "react";
import { scrollTo } from "../../utils/scroll";
import * as S from "./styles";

const navItems = ["About", "Project", "Contact"];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <S.OpenMenu onClick={() => setIsOpen(true)}>
        <span />
        <span />
      </S.OpenMenu>
      <S.LinkGroup open={isOpen}>
        <S.CloseMenu onClick={() => setIsOpen(false)}>
          <span />
          <span />
        </S.CloseMenu>
        {navItems.map((link, i) => (
          <S.ListItem key={[link, i].join(".")}>
            <S.Link
              onClick={(_e) => {
                scrollTo(link.toLowerCase());
                setIsOpen(false);
              }}
            >
              {link}
            </S.Link>
          </S.ListItem>
        ))}
        <S.Line />
      </S.LinkGroup>
    </S.Container>
  );
};

export default Header;
