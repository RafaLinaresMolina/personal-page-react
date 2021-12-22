import {
  FileMarkdownFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { FunctionComponent } from "react";
import { DefaultItem } from "../Menu/types";
import Page from "../Page/Page";
import { PageType } from "../Page/types";
import "./DisplayFile.scss";
import myself from "../../img/myself.jpg";
import myselfContact from "../../img/myself3.jpg";
import geekshubs from "../../img/logos/geek.jpg";

interface DisplayFileProps {
  fileTabs: DefaultItem[];
}

const pages: PageType[] = [
  {
    id: "home",
    title: "OMG It Worked! I mean... Home page.",
    content: [
      {
        __typename: "Quote",
        author: "Chris Heilmann",
        quote: "Java is to JavaScript what car is to Carpet.",
      },
      {
        __typename: "Entry",
        picture: <img src={myself} alt="myself" />,
        text: {
          title: "About myself",
          text: "Well, here we are. Now I supose I could talk about my whereabouts in life...",
          list: (
            <ul>
              <li>
                Hi, my name is <b>Rafa Linares Molina</b> and as you can see I
                am a <s>Wizard</s> <i>Senior FullStack Developer</i>.
              </li>
              <li>
                I am from Valencia, I was born around the 90's (I am almost
                older than the world wide web, may be you hear about it)
              </li>
              <li>
                Since i was very young I can remember tearing apart all the
                electronics my hands could grab to check the internals. But
                after breaking more stuff than ever repaired I decided to start
                my career as full stack developer (you can't over power the code
                and stuff like that...).
              </li>
              <li>
                As in my spare time, I am a person with quite a few interest
                regarding any technological issue, like cybersecurity (as a
                hobby, nothing serious), IoT, and Linux en general.
              </li>
              <li>
                But not all in life is work, I rarely refuse a beer with my
                friends, or boardgames night.
              </li>
            </ul>
          ),
        },
      },
    ],
  },
  {
    id: "curriculum",
    title: "The road so far...",
    content: [
      {
        __typename: "Quote",
        quote: "Knowledge is power.",
        author: "Francis Bacon",
      },
      {
        __typename: "Entry",
        picture: <img src={geekshubs} alt="GeeksHubs Academy" />,
        text: {
          title: "GeeksHubs Academy",
          url: "https://geekshubsacademy.com/",
          text: "An intensive, demanding, restless but amazing bootcamp experience:",
          list: (
            <ul>
              <li>Rediscover the passion for my profession</li>
              <li>Improved all my previous knowledge</li>
              <li>
                Start (and loved) to work Frontend with React (with hooks!){" "}
              </li>
              <li>
                Remarked the importance of Agile nowdays (Damn it!, use the damn
                frameworks correctly!)
              </li>
              <li>Sumary of skills / Technologies done on the bootcamp</li>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>PHP (Laravel)</li>
                <li>SQL Databases (MySQL, postgresql, MariaDB) </li>
                <li>NOSQL Database (MongoDB)</li>
                <li>Sequelize</li>
                <li>Mongoose</li>
                <li>Wordpress</li>
                <li>docker</li>
                <li>Agile / Scrum</li>
              </ul>
            </ul>
          ),
        },
      },
    ],
  },
  {
    id: "contact",
    title: "Contact me!",
    content: [
      {
        __typename: "Quote",
        quote: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
      },
      {
        __typename: "Entry",
        picture: <img src={myselfContact} alt="Myself again" />,
        text: {
          title: "Contact Info!",
          text: "Here you can find me, contact me through:",
          list: (
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/rafa-linares-molina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinFilled /> Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RafaLinaresMolina"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubFilled /> Github
                </a>
              </li>
            </ul>
          ),
        },
      },
    ],
  },
];

const DisplayFile: FunctionComponent<DisplayFileProps> = ({ fileTabs }) => {
  return (
    <div className="openFiles">
      <div className="tabs">
        {fileTabs.map((tab) => (
          <div key={tab.id} className={`page ${tab.active ? "pageActive" : ""}`}>
            <span>
              <FileMarkdownFilled className="itemFileIcon" /> {tab.text}
            </span>
          </div>
        ))}
      </div>
      <Page pages={pages} />
    </div>
  );
};

export default DisplayFile;
