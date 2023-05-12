import { useLayoutEffect } from "react";

import { gsap } from "gsap";
import { IHero } from "../../utils/interfaces";
import { scrollTo } from "../../utils/scroll";
import * as S from "./styles";
import { ColoredText } from "../../styles/commonstyles";
import { useRouter } from "next/dist/client/router";

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
            stagger: 0.05,
            duration: 3,
            ease: "power4.out",
            ...config,
          }
        );
      },
      defaults: { duration: 2 },
      extendTimeline: true,
    });

    gsap.registerEffect({
      name: "dropAndBounce",
      effect: (target: string, config?: any) => {
        return gsap.fromTo(
          target,
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 3,
            ease: "power4.out",
            ...config,
          }
        );
      },
      defaults: { duration: 2 },
      extendTimeline: true,
    });

    gsap.registerEffect({
      name: "slideUp",
      effect: (target: string, config?: any) => {
        return gsap.to(
          target,

          {
            y: 0,
            duration: 5,
            ease: "power4.out",
            ...config,
          }
        );
      },
      defaults: { duration: 2 },
      extendTimeline: true,
    });

    const textAnimation = gsap.timeline();

    textAnimation.fadeLeft(".greeting");
    textAnimation.dropAndBounce(".name");
    textAnimation.fadeLeft(".desc");
    textAnimation.slideUp(".scroll_btn");
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
        {`${text} ${catchPhrase}`.split("").map((text, i) => {
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
      <S.DescText>
        {desc.split("").map((text, i) => (
          <span className="desc" key={i}>
            {text}
          </span>
        ))}
      </S.DescText>

      <S.ScrollButton
        className="scroll_btn"
        onClick={(_e) => router.replace("/about")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </S.ScrollButton>
    </S.Container>
  );
};

export default Hero;
