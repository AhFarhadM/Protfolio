import { MdOpenInNew } from "react-icons/md";

function SoftSkills() {
  return (
    <>
      <h2
        id="soft-skills"
        className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 lg:text-4xl text-3xl text-zinc-700 my-8"
      >
        <a href="#soft-skills">Soft Skills</a>
      </h2>
      <p className="mt-2 mb-6">
        Certain skills I've picked along the way that deserves mentioning:
      </p>
      <ul className="list-[square] mt-5 ml-5">
        <li className="mb-4">
          <strong className="font-bold dark:text-zinc-300 text-zinc-700">
            Attention to detail
          </strong>
          : I take pleasure in creating designs and UIs with careful precision,
          emphasizing quality over quantity.
        </li>
        <li className="mb-4">
          <strong className="font-bold dark:text-zinc-300 text-zinc-700">
            Open-source/Collaboration:
          </strong>{" "}
          I founded a community on GitHub called{" "}
          <a
            className="dark:text-blue-400 text-blue-500 hover:underline inline-flex items-center gap-1"
            href="https://github.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            Communitypro <MdOpenInNew />
          </a>{" "}
          that helps newbie developers learn how to contribute to open-source
          projects and collaborate in building together. Currently we are over{" "}
          <a
            className="dark:text-blue-400 text-blue-500 hover:underline inline-flex items-center gap-1"
            href="https://github.com/orgs/CommunityPro/people"
            rel="noreferrer noopener"
            target="_blank"
          >
            400 <MdOpenInNew />
          </a>{" "}
          people strong with room for growth.
        </li>
        <li className="mb-4">
          <strong className="font-bold dark:text-zinc-300 text-zinc-700">
            Ability to work with little supervision:{" "}
          </strong>
          I understand people are busy and would love to get things done timely,
          so I do my best in delivering assignments and projects with little
          supervision, sparing you the need to closely manage/oversee my work.
        </li>
      </ul>
    </>
  );
}

export default SoftSkills;
