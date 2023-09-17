import TerminalPath from "@/components/terminalPath/terminalPath";
import personalInfo from "@/data/personalInfo";

export default function PersonalInfo() {
  return (
    <>
      {personalInfo.map(({ path, value }) => (
        <div key={path}>
          <TerminalPath path={path} />
          {value}
        </div>
      ))}
    </>
  );
}
