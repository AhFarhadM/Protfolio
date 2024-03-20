import { MdOpenInNew } from "react-icons/md";

function Header() {
  return (
    <section>
      <div className="leading-[1.44]">
        <h2 className="text-[28px] lg:text-4xl mb-4 font-bold text-zinc-700 leading-[1.48]">
          I&apos;m Ahmad Farhad Mominzada. I live in Afghanistan, Where I was
          born .
        </h2>
        <div className="flex flex-col gap-6 text-[16px] text-zinc-600">
          <p>
            I am a self-driven, career-oriented software developer specializing
            in front-end development and open-source, currently pursuing a
            bachelors degree in computer science. My expertise lies in building
            interactive web applications on the client side. Primarily working
            with technologies like JavaScript, Next.js, TypeScript and Python.
          </p>
          <p>
            I strongly believe in continuous learning and improving myself, so I
            try my best to learn in any situation possible, unfavorable or not.
          </p>
          <p>
            Beyond learning, I enjoy writing technical articles and creating
            projects that both inspire and benefit fellow developers. You can
            find my recent posts on
            <a
              className="inline-flex text-[#45a3ff] items-center gap-1"
              href="https//:"
            >
              freeCodeCamp
              <MdOpenInNew />
            </a>{" "}
            and my personal{" "}
            <a
              className="inline-flex text-[#45a3ff] items-center gap-1"
              href="#"
            >
              blog <MdOpenInNew />
            </a>{" "}
            hosted on this site.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
