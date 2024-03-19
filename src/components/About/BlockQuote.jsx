import { MdFormatQuote } from "react-icons/md";

function Quote() {
  return (
    <blockquote className="relative overflow-hidden tracking-tight text-lg my-8 lg:py-6 lg:pl-6 pr-12 p-4 border dark:border-zinc-800 border-zinc-200 rounded-md">
      <MdFormatQuote className="text-[80px] absolute -top-6 -right-6 -rotate-12 dark:text-zinc-800 text-zinc-200" />
      If you ever spot me in the wild, don't hesitate to say hello! Let's grab a
      drink and geek-out over the latest advancements in front-end development
      or discuss our favorite programming language. <br /> ⚡
    </blockquote>
  );
}

export default Quote;
