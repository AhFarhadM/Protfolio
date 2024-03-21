import { IoTime } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import Img from "../../assets/blog/How have collaboration and teamwork enhanced my coding skills/img.jfif";
import Author from "../../assets/blog/How have collaboration and teamwork enhanced my coding skills/author.jfif";

function BlogDetails() {
  return (
    <section className="max-w-7xl mx-auto md:px-16 px-6">
      <div className="flex lg:flex-row flex-col relative">
        <div className="min-h-full lg:border-r border-r-0 dark:border-zinc-800 border-zinc-200 basis-3/4 pt-10 pb-4 lg:pr-6 px-0">
          <div className="flex items-center flex-wrap gap-4 text-md mb-8 dark:text-zinc-400 text-zinc-600">
            <div className="flex items-center gap-x-2">
              <FaCalendar />
              <time dateTime="2023-12-14T17:46:11.500Z">Dec 14, 2023</time>
            </div>
            <div className="flex items-center gap-x-2">
              <IoTime />
              <div className="">5 min</div>
            </div>
          </div>
          <header className="mb-10">
            <div style={{ opacity: 1, transform: "none" }}>
              <h1 className="max-w-3xl text-zinc-800 font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
                How have collaboration and teamwork enhanced my coding skills?
              </h1>
            </div>
          </header>
          <div className="relative w-full h-40 pt-[52.5%]">
            <span className="absolute inset-0 overflow-hidden bg-transparent">
              <img
                alt="Cover image of Sanity Webhooks and On-demand Revalidation in Nextjs"
                sizes="100vw"
                className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full  max-w-full min-h-full max-h-full rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
                src={Img}
              />
            </span>
          </div>
          <div className="mt-8 mb-6">
            <p className="text-zinc-800 text-[18px] mt-2 mb-6">
              Have you ever wondered how collaboration can boost your
              productivity and enhance your communication skill? Teamwork is
              truly great because it brings together people with diverse ideas.
              Working with different individuals enables efficient
              problem-solving, leading to excellent solutions for various tasks
              and challenges. This collaborative approach not only boosts coding
              skills but also enhances communication abilities in a friendly and
              engaging manner.
            </p>
            <p className="text-zinc-800 text-[18px] mt-2 mb-6">
              Here I will explain why working in a team is awesome! I will share
              the amazing benefits it brings, like boosting productivity and
              making work more enjoyable. Let&apos;s explore how collaborating
              with others can lead to better results in work life.
            </p>
            <p className="text-zinc-800 text-[18px] mt-2 mb-6">
              Teamwork is incredible because it brings together people with
              different ideas, helping them work together efficiently to solve
              problems and achieve good results for various tasks and
              challenges.
            </p>
            <p className="text-zinc-800 text-[18px] mt-2 mb-6">
              One of the benefits of teamwork is the sense of camaraderie that
              develops among the team. When people work together towards a
              common goal, they form a strong bond and support each other. This
              makes teamwork more interesting.
            </p>
            <p className="text-zinc-800 text-[18px] mt-2 mb-6">
              In a collaborative setting, communication is key. Team members
              openly share their ideas and thoughts, which makes a better
              understanding and collaboration. When other people listen to a
              member of the group it fosters feeling valued and heard.
            </p>
            <p className="text-zinc-800 text-[18px] mt-2 mb-6">
              Moreover, teamwork provides opportunities for personal growth and
              learning. When you work with different people from different
              backgrounds and skill sets, it will cause improvement and
              development.
            </p>
            <p className="text-zinc-800 text-[18px] mt-2 mb-6">
              In conclusion, teamwork is essential for our development journey.
              Collaborating with diverse individuals enhances our
              problem-solving skills while sharing ideas boosts our
              communication abilities. Embracing teamwork opens doors to
              continuous learning and growth.
            </p>
            <p className="text-zinc-800 text-[18px] mt-2 mb-6">
              So did you like reading this article? Please feel free to share
              your thoughts and comments!
            </p>
          </div>
        </div>
        <Aside />
      </div>
    </section>
  );
}

function Aside() {
  return (
    <aside className="flex flex-col lg:max-h-full h-max gap-y-8 sticky top-2 bottom-auto right-0 basis-1/4 py-10 lg:px-6 px-0">
      <AuthorSection />
      <Tags />
    </aside>
  );
}

function AuthorSection() {
  return (
    <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
      <p className="dark:text-zinc-400 text-zinc-500 text-sm">Written By</p>
      <address className="flex items-center gap-x-3 mt-4 not-italic">
        <div className="relative w-12 h-12">
          <span className="absolute inset-0 overflow-hidden bg-transparent border-0">
            <img
              alt="Headshot of Victor Eke"
              sizes="100vw"
              src={Author}
              className="absolute inset-0 overflow-hidden bg-transparent dark:bg-zinc-800 bg-zinc-300 rounded-full object-cover"
            />
          </span>
        </div>
        <div rel="author">
          <h3 className="font-semibold text-lg tracking-tight">Mahdi Noori </h3>
          <a
            href="https://twitter.com/mahdinoori2000"
            className="text-blue-500 text-sm"
            rel="noreferrer noopener"
            target="_blank"
          >
            @mahdinoori2000
          </a>
        </div>
      </address>
    </section>
  );
}

function Tags() {
  return (
    <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
      <h3 className="text-xl font-semibold tracking-tight mb-4">Tags</h3>
      <ul className="flex flex-wrap items-center gap-2 tracking-tight">
        <li className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 text-sm">
          Tags
        </li>
        <li className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 text-sm">
          Collaboration
        </li>
        <li className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 text-sm">
          Developer
        </li>
        <li className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 text-sm">
          Teamwork
        </li>
        <li className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 text-sm">
          Programming
        </li>
      </ul>
    </section>
  );
}

export default BlogDetails;
