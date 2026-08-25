import Socials from "@/components/data/socials/socials";
import PersonalInfo from "@/components/data/personalInfo/personalInfo";
import Projects from "@/components/data/projects/projects";
import TerminalPath from "@/components/terminalPath/terminalPath";

export default function App() {
  return (
    <main>
      <PersonalInfo />
      <Projects />
      <Socials />
      <TerminalPath />
    </main>
  );
}
