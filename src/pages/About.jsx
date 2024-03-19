import ImgBox from "../components/About/Img";
import Header from "../components/About/Header";
import BlockQuote from "../components/About/BlockQuote";
import SoftSkills from "../components/About/SoftSkills";
import Setup from "../components/About/Setup";
import Usage from "../components/About/Usage";

function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 ">
      <div className="relative grid grid-cols-1  lg:grid-cols-custom-about gap-x-6 justify-items-center">
        <div className="text-zinc-600">
          <Header />
          <BlockQuote />
          <SoftSkills />
          <Setup />
          <Usage />
        </div>
        <ImgBox />
      </div>
    </main>
  );
}
export default About;
