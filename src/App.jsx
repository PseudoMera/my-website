import Socials from "@/components/data/socials/socials";
import PersonalInfo from "@/components/data/personalInfo/personalInfo";
import Projects from "@/components/data/projects/projects";

export default function App() {
  return (
    <main id="top">
      <PersonalInfo />
      <Projects />
      <Socials />
    </main>
  );
}
