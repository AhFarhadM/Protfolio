import { MdOpenInNew } from "react-icons/md";
import desktopImg from "../../assets/about/desktop-setup.jfif";

function Setup() {
  return (
    <>
      <h2
        id="setup"
        className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 lg:text-4xl text-3xl text-zinc-700 my-8"
      >
        <a href="#setup">Setup</a>
      </h2>
      <p className="mt-2 mb-6">
        I made a{" "}
        <a
          className="dark:text-blue-400 text-blue-500 hover:underline inline-flex items-center gap-1"
          href="https://victoreke.notion.site/Eke-s-Setup-List-72ff084498b04913b47307a22b052011"
          rel="noreferrer noopener"
          target="_blank"
        >
          notion list <MdOpenInNew />
        </a>{" "}
        of things I need to build the right setup for my productivity. Among
        this list, I&apos;ve purchased a personal laptop. Hopefully before the
        end of 2023, I should buy everything else.
      </p>
      <p class="mt-2 mb-6">
        Feeling generous? You can{" "}
        <a
          className="dark:text-blue-400 text-blue-500 hover:underline inline-flex items-center gap-1"
          href="https://www.buymeacoffee.com/victoreke"
          rel="noreferrer noopener"
          target="_blank"
        >
          buy me a coffee <MdOpenInNew />
        </a>{" "}
        to support my work.
      </p>
      <figcaption className="my-10">
        <img
          className="rounded-sm object-cover object-left-top aspect-auto duration-300 w-[900px] h-[456px]  "
          src={desktopImg}
          alt="Desktop setup "
        />
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Setup I plan to build one day
        </p>
      </figcaption>
    </>
  );
}

export default Setup;
