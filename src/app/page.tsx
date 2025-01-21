import Hero from "../components/Hero";
import AboutMe from "../components/Aboutme";
import Projects from "../components/projects";
import MySkills from "../components/MySkills";
import { ContactMe } from "../components/ContactMe";

export default function Home() {
  return (
    <>
      <Hero/> 
      <AboutMe />
      <Projects/>
      <MySkills />
      <ContactMe />
    </>
  );
}
