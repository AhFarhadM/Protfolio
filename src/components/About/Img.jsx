import personImg from "../../assets/about/person.jpg";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";
import { CiMail } from "react-icons/ci";

function ImgBox() {
  return (
    <div className="  row-start-1 lg:col-start-2 flex flex-col lg:justify-self-center justify-self-start gap-y-4 lg:order-1 order-none mb-12 ">
      <img
        className="w-[400px] h-[360px] object-cover rounded-xl "
        src={personImg}
        alt="Person "
      />
      <div className="flex max-w-full gap-x-4">
        <button className="bg-zinc-100 border border-transparent hover:border-zinc-200   w-full py-2 rounded-lg ">
          <a
            className="w-full flex justify-center items-center text-zinc-700 gap-2 font-bold"
            href="https://squids-care-ghl.craft.me/WQpQF3jrPIodXp"
            target="_blank"
          >
            <span>View resume</span> <MdOpenInNew />
          </a>
        </button>
        <button className="bg-zinc-100 border border-transparent hover:border-zinc-200  rounded-md px-[12px] text-[#23d344]">
          <MdOutlineSimCardDownload className="text-[24px]" />
        </button>
      </div>
      <a
        className=" flex items-center gap-1 text-zinc-600 hover:text-[#1daf37] font-semibold"
        href="#"
      >
        <CiMail className="text-xl" /> farhadmominzada@gmail.com
      </a>
    </div>
  );
}

export default ImgBox;
