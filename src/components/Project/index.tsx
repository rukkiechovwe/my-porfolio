import { ArrowUpRight } from "phosphor-react";
import { IProject } from "../../utils/interfaces";
import Tooltip from "../Tooltip";
import * as S from "./styles";
import { FloatText, ColoredText } from "../../styles/commonstyles";
import ScrollTo from "../ScrollTo";
import Link from "next/link";

type ProjectProps = {
  project: IProject;
};

const Project: React.FC<ProjectProps> = ({
  project: { tag, projects, deskTopProjects },
}) => {
  return (
    <S.PContainer id={tag}>
      <FloatText>
        Featured <ColoredText>{tag}s.</ColoredText>
      </FloatText>
      <S.MobileProjects>
        {projects.map((item, i) => (
          <S.Project key={i} url={item.imgUrl}>
            <div className="project-desc">
              <Link href={item.links[0].url} target="_blank">
                <S.TitleText>
                  {item.title}
                  <ArrowUpRight size={22} />
                </S.TitleText>
              </Link>
              <S.DescText>{item.desc}</S.DescText>

              <S.TagRow>
                {item.tags.map((tag, i) => (
                  <S.Tag key={[tag, i].join(".")}>{tag}</S.Tag>
                ))}
              </S.TagRow>
              <S.Icons>
                {item.links.map((link, i) => (
                  <S.IconText
                    key={[link.url, i].join(".")}
                    href={link.url}
                    target="_blank"
                  >
                    <Tooltip text={link.tooltip}>{link.icon}</Tooltip>
                  </S.IconText>
                ))}
              </S.Icons>
            </div>
          </S.Project>
        ))}
      </S.MobileProjects>
      <S.DeskTopProjects>
        {deskTopProjects.map((item, i) => (
          <S.Project key={i} url={item.imgUrl}>
            <div className="project-desc">
              <Link href={item.links[0].url} target="_blank">
                <S.TitleText>
                  {item.title}
                  <ArrowUpRight size={22} />
                </S.TitleText>
              </Link>
              <S.DescText>{item.desc}</S.DescText>

              <S.TagRow>
                {item.tags.map((tag, i) => (
                  <S.Tag key={[tag, i].join(".")}>{tag}</S.Tag>
                ))}
              </S.TagRow>
              <S.Icons>
                {item.links.map((link, i) => (
                  <S.IconText
                    key={[link.url, i].join(".")}
                    href={link.url}
                    target="_blank"
                  >
                    <Tooltip text={link.tooltip}>{link.icon}</Tooltip>
                  </S.IconText>
                ))}
              </S.Icons>
            </div>
          </S.Project>
        ))}
      </S.DeskTopProjects>
      <ScrollTo link="contact" />
    </S.PContainer>
  );
};

export default Project;
