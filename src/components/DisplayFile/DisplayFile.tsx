import {
  FileMarkdownFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { FunctionComponent } from "react";
import { DefaultPages } from "../Menu/types";
import Page from "../Page/Page";
import { PageType } from "../Page/types";
import "./DisplayFile.scss";
import myself from "../../img/myself.jpg";
import myselfContact from "../../img/myself3.jpg";
import geekshubs from "../../img/logos/geek.jpg";
import mytra from "../../img/logos/mytra.png";
import srg from "../../img/logos/srg.jpg";
import capgemini from "../../img/logos/capgemini.png";
import gnommo from "../../img/logos/gnommo.jpg";
import demium from "../../img/logos/demium.png";
import streamion from "../../img/logos/streamion.png";
import { PayloadPages } from "../../redux/types/pages";
import { useTypedSelector } from "../../redux/hook";

interface DisplayFileProps {
  fileTabs: DefaultPages[];
  changePage: (id: keyof PayloadPages) => Promise<void>;
  checkIfTabIsActive: (
    pageState: PayloadPages,
    tabId: keyof PayloadPages
  ) => boolean;
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
        quote: "Behind every successful man there’s a lot of unsuccessful years.",
        author: "Bob Brown",
      },
      {
        __typename: "Entry",
        picture: <img src={streamion} alt="Streamion" style={{height: "256px", width: "256px"}} />,
        text: {
          title: "Streamion",
          url: "https://www.streamion.io/",
          text: "Still on the startup enviroment, I was hired on this wonderful work environment full of profesionals",
          list: (<>
            <ul>
              <li>Streamion is an adServer for livestreaming channels and video on demand platforms.</li>
              <li>My role is <b>Senior fullstack developer</b ></li>
              <li>I am responsable of:</li>
              <ul>
                <li>Scrum Master</li>
                <li>Senior developer on the backend side, using tecnologies as:</li>
                <ul>
                  <li>Node + express + typescript for the API Rest side</li>
                  <li>PostgreSQL (with sequelize for persistance)</li>
                  <li>MongoDb</li>
                  <li>Jest as testing library</li>
                  <li>Redis (as cache and socket adapter)</li>
                </ul>
                <li>Senior developer on the front side, using tecnologies as:</li>
                <ul>
                  <li>React + typescript + Redux on the frontend of the app</li>
                  <li>Jest as testing library</li>
                </ul>
                <li>Other tools</li>
                <ul>
                  <li>OBS</li>
                  <li>Twitch</li>
                  <li>Figma (in colaboration with the product and design team to create the wireframes for the frontend)</li>
                  <li>clickUp as agile board</li>
                </ul>
                <li>How we work</li>
                <ul>
                  <li>All the teams work mostly with Scrumm, with few exceptions that need kanban workflow.</li>
                </ul>
              </ul>
            </ul>
            </>
          ),
        },
      },
      {
        __typename: "Quote",
        quote: "Talent wins games, but teamwork and intelligence win championships.",
        author: "Michael Jordan",
      },
      {
        __typename: "Entry",
        picture: <img src={demium} alt="Demium Valencia" style={{height: "256px", width: "256px"}} />,
        text: {
          title: "Demium Valencia",
          url: "https://demium.com/locations/valencia/es/",
          text: "Tried the entrepreneur way, and I can say:",
          list: (<>
            <ul>
              <li>Discovered a passionate enviroment full of other entrepreneurs with the guts to start something big from scratch</li>
              <li>A team wonderfuls mentors that helped on all the steps of my startap. </li>
              <li>A bit of info of the project:</li>
              <ul>
                <li>Me and other 2 partners tried to create a platform to improve the real state tools, because in spain it is a market with a technological deficit.</li>
                <li>My role was CTO</li>
                <li>The initial approach was, in aim to improve the dossiers generated for the real state companies, offer extra valuable info to the data already known</li>
                <li>So, after add the basic info of a place, they received:</li>
                <ul>
                  <li>How was the nearby neighborhood, how much pharmacies or schools where in the zone</li>
                  <li>Info about the population of the zone: average income, how the buildings were distributed</li>
                  <li>Rentability of the purchase</li>
                </ul>

                <li>The tecnologies used so far:</li>
                <li>Google coud to allocate the machines</li>
                <li>Persistance and services:</li>
                <ul>
                  <li>NOSQL Database (MongoDB): Used to save the data entered by the user and the generated data from them. </li>
                  <li>PostgreSQL: Used to save and clean the cadastre data </li>
                  <li>Microservices to calculate the estra value on the dossier </li>
                </ul>
                <li>Backend: </li>
                <ul>
                  <li>Node & express with Typescript</li>
                  <li>sequelize and mongoose to communicate with persistent data</li>
                </ul>
                <li>Frontend: </li>
                <ul>
                  <li>React with typescript and Redux</li>
                  <li>Builded a reactive fomr that changed depending on the filled options </li>
                  <li>The ability of generate PDFs, both in spanish and english</li>
                </ul>
                <li>Agile / Scrum with my partners</li>
              </ul>
            </ul>
            Sadly, (as the majority of the startups) the startup did not growth, but the experience obtained from the experience is priceless and I would definitely repeat it
            </>
          ),
        },
      },
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
      {
        __typename: "Quote",
        quote: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde",
      },
      {
        __typename: "Entry",
        picture: <img src={mytra} alt="Mytra Control S.L"/>,
        text: {
          title: "Mytra Control S.L.",
          url: "https://www.mytra.es/",
          text: "In this particular place I worked for two years as:",
          list: (
            <>
              <ul>
                <li>Backend developer with nodejs</li>
                <li>Android developer with native android for smartwatches</li>
                <li>Started the adventure of cloud with azure and aws</li>
                <li>Being an active part of a SCRUM team</li>
              </ul>
              While also:
              <ul>
                <li>
                  Improved a lot of stuff about agile philosophy and SCRUM
                </li>
              </ul>
            </>
          ),
        },
      },
      {
        __typename: "Quote",
        quote: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
      },
      {
        __typename: "Entry",
        picture: <img src={srg} alt="SRG Global Lliria" style={{height: "256px", width: "256px"}} />,
        text: {
          title: "SRG Global Lliria",
          url: "https://www.srgglobal.com/",
          text: "Working as an external consultant for a whole year my tasks where:",
          list: (
            <>
              <ul>
              <li>Learned how to really do SCRUM</li>
              <li>The importance of the well use of Git and Gitflow</li>
              <li>Improved my skills with Microsoft SQL Server</li>
              <li>worked with delphi on legacy code</li>
            </ul>
            And this experience helped myself to improve myself as a profesial
            and to not be scared of legacy code.
            </>
          ),
        },
      },
      {
        __typename: "Quote",
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
      },
      {
        __typename: "Entry",
        picture: <img src={capgemini} alt="Capgemini" />,
        text: {
          title: "Capgemini",
          url: "https://www.capgemini.com/es-es/",
          text: "Working as Junior Consultant for two year I worked and learned:",
          list: (
            <>
              <ul>
              <li>How to work with SCRUM</li>
              <li>
                The importance of the correct communication with my team
              </li>
              <li>Improved my skills with Oracle SQL Server</li>
              <li>
                The needing of test the code for avoiding future errors and
                have more control of the workflow
              </li>
              <li>Worked with C on batch scripts</li>
            </ul>
            </>
          ),
        },
      },
      {
        __typename: "Quote",
        quote: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
      },
      {
        __typename: "Entry",
        picture: <img src={gnommo} alt="Gnomostudios" />,
        text: {
          title: "Gnomostudios",
          url: "https://twitter.com/gnommostudios?lang=es",
          text: "As my first job:",
          list: (
            <>
              <ul>
              <li>I learned how to give presentations for clients</li>
              <li>
                Improved my knowledge of android studio and android apps
              </li>
              <li>Improved my skills with MySQL Server</li>
              <li>The importance of a well organized schedule work</li>
              <li>start knowing nodejs and Angular</li>
            </ul>
            And I have a very good memories from the Gnommostudios team.
            </>
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

const DisplayFile: FunctionComponent<DisplayFileProps> = ({
  fileTabs,
  changePage,
  checkIfTabIsActive,
}) => {
  const pageState = useTypedSelector((state) => state);
  return (
    <div className="openFiles">
      <div className="tabs">
        {fileTabs.map((tab) => (
          <div
            onClick={() => changePage(tab.id)}
            key={tab.id}
            className={`page ${
              checkIfTabIsActive(pageState, tab.id) ? "pageActive" : ""
            }`}
          >
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
