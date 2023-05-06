import { ArrowUpRight } from "phosphor-react";
import { IProject } from "../../utils/interfaces";
import Tooltip from "../Tooltip";
import * as S from "./styles";

type ProjectProps = {
  project: IProject;
};

const Project: React.FC<ProjectProps> = ({ project: { tag, projects } }) => {
  return (
    <S.Container id={tag}>
      <S.HeaderText>
        Featured <S.ColoredText>{tag}s.</S.ColoredText>
      </S.HeaderText>
      <S.Projects>
        {projects.map((item, i) => (
          <S.Project key={i} url={item.imgUrl}>
            <div>
              <S.TitleText>
                {item.title}
                <ArrowUpRight size={22} />
              </S.TitleText>
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
      </S.Projects>
    </S.Container>
  );
};

export default Project;
