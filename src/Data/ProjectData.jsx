import { SlCalender } from "react-icons/sl";
import { BsPlayFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

export const ProjectData = [
  {
    id: 1,
    portfolio: {
      imgSrc: "/project_images/portfolio.png",
      title: "Rehan Portfolio",
      date: {
        icon: <SlCalender />,
        datetime: "15 Sep",
      },
      summary: "My personal website with a list of my projects that help people learn and blog posts about life, web-development, and machine-learning",
      tags: [
        { name: "React", id: 1 },
        { name: "Front End", id: 2 },
        { name: "Javascript", id: 3 },
      ],
      buttons: [
        { name: "Demo", id: 1, icon: <BsPlayFill />, url: 'https://rehanulhaque.github.io/portfolio/'},
        { name: "Source Code", id: 2, icon: <AiFillGithub />, url: 'https://github.com/rehanulHaque/portfolio' },
      ],
    },
  },
];
