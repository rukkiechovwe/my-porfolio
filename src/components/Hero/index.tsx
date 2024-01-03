import { useLayoutEffect } from "react";

import { gsap } from "gsap";
import { IHero } from "../../utils/interfaces";
import { scrollTo } from "../../utils/scroll";
import * as S from "./styles";
import { ColoredText } from "../../styles/commonstyles";
import { useRouter } from "next/dist/client/router";
import ScrollTo from "../ScrollTo";

type HeroProps = {
  hero: IHero;
};

const Hero: React.FC<HeroProps> = ({
  hero: { text, desc, greeting, catchPhrase },
}) => {
  const router = useRouter();

  useLayoutEffect(() => {
    gsap.registerEffect({
      name: "fadeLeft",
      effect: (target: string, config?: any) => {
        return gsap.fromTo(
          target,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.2,
            duration: 0.1,
            ease: "power4.out",
            ...config,
          }
        );
      },
      defaults: { duration: 0.1 },
      extendTimeline: true,
    });

    gsap.registerEffect({
      name: "dropAndBounce",
      effect: (target: string, config?: any) => {
        return gsap.fromTo(
          target,
          {
            y: 500,
            opacity: 0,
            stagger: 0,
            duration: 0.05,
            ease: "power4.out",
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power4.out",
            ...config,
          }
        );
      },
      defaults: { duration: 0.5 },
      extendTimeline: true,
    });


    const textAnimation = gsap.timeline();

    textAnimation.fadeLeft(".greeting");
    textAnimation.dropAndBounce(".name");
    // textAnimation.fadeLeft(".desc");
    // textAnimation.slideUp(".scroll_btn");
  }, []);

  return (
    <S.Container>
      <S.Greetings>
        <ColoredText>
          {greeting.split("").map((text, i) => (
            <span className="greeting" key={i}>
              {text}
            </span>
          ))}
        </ColoredText>
      </S.Greetings>
      <S.HeaderText>
        {text.split("").map((text, i) => {
          return text === " " ? (
            <span className="name" key={i}>
              {" "}
            </span>
          ) : (
            <S.NameLetters className="name" key={i}>
              {text}
            </S.NameLetters>
          );
        })}
      </S.HeaderText>
      <S.HeaderText>
        {catchPhrase.split("").map((text, i) => {
          return text === " " ? (
            <span className="name" key={i}>
              {" "}
            </span>
          ) : (
            <S.NameLetters className="name" key={i}>
              {text}
            </S.NameLetters>
          );
        })}
      </S.HeaderText>
      {/* <S.DescText>
        <ColoredText>
          {desc.split("").map((text, i) => (
            <span className="desc" key={i}>
              {text}
            </span>
          ))}
        </ColoredText>
      </S.DescText> */}

      <ScrollTo link="about" />
    </S.Container>
  );
};

export default Hero;
