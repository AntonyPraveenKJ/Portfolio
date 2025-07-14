import Navbar from "./components/Navbar";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import HomeSection from "./sections/HomeSection/HomeSection";
import KnownTechSection from "./sections/KnownTechSection/KnownTechSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import StatsSection from "./sections/StatsSection/StatsSection";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection title="home" />
      <StatsSection />
      <SkillsSection title="skills" />
      <ExperienceSection title="experience" />
      <KnownTechSection title="technologies" />
    </>
  );
}

export default App;
