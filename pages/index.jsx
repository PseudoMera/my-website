import Head from "next/head";
import Socials from "@/components/data/socials/socials";
import PersonalInfo from "@/components/data/personalInfo/personalInfo";
import Projects from "@/components/data/projects/projects";
import TerminalPath from "@/components/terminalPath/terminalPath";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Albin Esteban Frias Rojas - Software Engineer</title>
      </Head>
      <PersonalInfo />
      <Projects />
      <Socials />
      <TerminalPath />
    </main>
  );
}
