export interface IHero {
  tag?: string;
  name: string;
  catchPhrase: string;
  text: string;
  desc: string;
  greeting: string;
}

export interface IAbout {
  tag?: string;
  name: string;
  bio: string;
  skills: Skills[];
}
export type Skills = {
  title: string;
  list: List[];
};

export type List = {
  name: string;
  data: string[];
};

export interface IContact {
  tag?: string;
  email: string;
  urls: (Link & { title: string })[];
}

export type Experience = {
  companyName: string;
  duration: string;
  jobTitle: string;
  workDone: string[];
  companyLink?: string;
};

export interface IExperience {
  tag?: string;
  experiences: Experience[];
}

export type Link = {
  icon: React.ReactElement;
  url: string;
  tooltip?: string;
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  imgUrl?: string;
  links: Link[];
};

export interface IProject {
  tag?: string;
  projects: Project[];
  deskTopProjects: Project[];
}

export interface ISocials {
  tag?: string;
  urls: (Link & { title: string })[];
}

export interface IApp {
  title: string;
  desc: string;
  hero: IHero;
  about: IAbout;
  contact: IContact;
  experience: IExperience;
  project: IProject;
  socials: ISocials;
}

export interface ITheme {
  bgColor: string;
  buttonColor?: string;
  buttonPrimaryColor?: string;
  buttonOutlineColor?: string;
  buttonHoverColor?: string;
  buttonHoverTextColor?: string;
  textColor?: string;
  highlightTextColor?: string;
  paragraphTextColor?: string;
  headerTextColor?: string;
  titleColor?: string;
  projectDescColor?: string;
  tooltipColor?: string;
  borderColor?: string;
  boxShadow?: string;
  white?: string;
  grey?: string;
  bgImageColor?: string;
}
