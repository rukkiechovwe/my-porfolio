import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  TwitterLogo,
  FilePdf,
} from "phosphor-react";
import { IApp } from "./interfaces";

const app: IApp = {
  title: "Ufuoma Oghenechovwe",
  desc: "Rukkie's Porfolio and Resume",
  hero: {
    tag: "hero",
    name: "Ufuoma Oghenechovwe",
    catchPhrase: "Rukkie",
    text: "I'm",
    greeting: "Hello there",
    desc: "<> Front-end developer </>",
  },
  about: {
    tag: "about",
    name: "Ufuoma",
    bio: "I'm a , I've 2 years of experience working with modern web technologies, I love watching movies and animes.\n I'm currently looking for a full-time opportunity/gig as a frontend developer.",

    skills: [
      {
        title: "I'm proficient and actively working with",
        list: [
          {
            name: "language",
            data: ["javascript", "typescript"],
          },
          {
            name: "frontend",
            data: ["reactjs", "nextjs"],
          },
          {
            name: "state-management",
            data: ["vuex", "redux"],
          },
          {
            name: "styling",
            data: [
              "CSS3",
              "styled-components",
              "tailwindcss",
              "ant design",
            ],
          },

          {
            name: "database",
            data: ["firebase", "graphql"],
          },
        ],
      },
    ],
  },
  contact: {
    tag: "contact",
    email: "rukkiechowe@gmail.com",
    urls: [
      {
        icon: <FilePdf size={22} />,
        url: "/assets/Resume_Ufuoma_Oghenechovwe.pdf",
        title: "Resume",
      },
      {
        icon: <LinkedinLogo size={22} />,
        url: "https://linkedin.com/in/rukkiechovwe",
        title: "Linkedin",
      },
      {
        icon: <TwitterLogo size={22} />,
        url: "https://twitter.com/rukkiechovwe",
        title: "Twitter",
      },
      {
        icon: <GithubLogo size={22} />,
        url: "https://github.com/rukkiechovwe",
        title: "Github",
      },
    ],
  },

  project: {
    tag: "project",
    projects: [
      {
        title: "kivifood",
        tags: ["react", "styled-component"],
        desc: "Kivifood is a platform where customers can get the food they want from the comfort of their homes.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https:kivifood.app",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "lastprice",
        tags: ["react", "redux", "ant design"],
        desc: "Lastprice is an eccomerce platform where vendors can sell products at discounted or slashed prices.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://amazing-torvalds-02adef.netlify.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/iamstanlee/last-price",
            tooltip: "View on github",
          },
        ],
      },
      {
        title: "Icompresser",
        tags: ["html", "Css3", "javascript"],
        desc: "Icompresser is a website to compress and convert images of different sizes and format.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.icompresser.com/",
            tooltip: "View the web",
          },
        ],
      },
      {
        title: "Event Template",
        tags: ["html", "Css3"],
        desc: "A template to book for your favorite events.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://event-template.netlify.app/",
            tooltip: "View the web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/kosa",
            tooltip: "View on github",
          },
        ],
      },
    ],
  },

  blog: {
    tag: "blog",
    blogs: [
      {
        title: "Leetcode #845 — Longest Mountain In Array",
        date: "DEC 24, 2021",
        text: "The leetcode #845 problem is a classical dynamic programming problem where we are asked to return the length of the longest mountain subarray from a given array. What is a mountain array? from the leetcode description, an array is a mountain array if it satisfies the following...",
        link: "https://medium.com/@iamstanlee/leetcode-845-longest-mountain-in-array-256202687979",
      },
    ],
  },
};

export default app;
