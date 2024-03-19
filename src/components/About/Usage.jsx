import { UsageData } from "../../data/about/UsageData";

function Usage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <a href="#technologies">Technologies</a>
      </h3>

      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        {UsageData.technalogy.map((data) => (
          <List data={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
}

function List({ data }) {
  return (
    <li className="mb-4  flex ">
      <a
        className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
        href={data.link}
        rel="noreferrer noopener"
        target="_blank"
      >
        <img
          alt="reactjs"
          loading="lazy"
          width="22"
          height="22"
          decoding="async"
          data-nimg="1"
          className="mr-2 contrast-30"
          src={data.image}
        />
        {data.title}
      </a>
      &nbsp;{data.description}
    </li>
  );
}

export default Usage;
