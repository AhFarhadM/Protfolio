import Img1 from "../../assets/photos/img1.jfif";
import Img2 from "../../assets/photos/img2.jfif";
import Img3 from "../../assets/photos/img3.jfif";

function PhotosSection() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <header className="mb-10">
        <div style={{ opacity: 1, transform: "none" }}>
          <h1 className="max-w-3xl font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
            Photos
          </h1>
          <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            This page is still under construction...
          </p>
        </div>
      </header>
      <figure className="my-6">
        <div
          className="flex flex-wrap gap-2"
          style={{ opacity: 1, transform: "none" }}
        >
          <ImgCard src={Img1} key={1} />
          <ImgCard src={Img2} key={2} />
          <ImgCard src={Img3} key={3} />
        </div>
      </figure>
    </main>
  );
}

function ImgCard({ src }) {
  return (
    <img
      alt="playing guitar"
      loading="lazy"
      width="350"
      height="800"
      decoding="async"
      data-nimg="1"
      className="dark:bg-primary-bg bg-secondary-bg"
      src={src}
      style={{ color: "transparent" }}
    />
  );
}

export default PhotosSection;
