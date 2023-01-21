import Image from "next/image";
import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function section1() {
  const handleClick = () =>
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  return (
    <section className="py-8 ">
      <div className="container mx-auto md:px-20 flex  ">
        <div className="bg-zinc-700 w-2/6 px-8 flex  flex-col justify-center py-8 text-white text-center">
          <h1 className="text-white text-center text-sm lg:text-3xl md:text-xl mt-10 py-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots.
          </h1>
          <hr className="w-40 mb-11" />
          <p className="text-xs lg:text-sm py-4">
            There are many variations of passages of Lorem Ipsum available,There
            are many variations of passages of Lorem Ipsum available.
          </p>
          <div className="flex flex-col lg:flex-row justify-between px-4 items-center py-4 ">
            <button
              onClick={handleClick}
              className="bg-black p-4 rounded-full text-sm lg:text-lg  hover:bg-zinc-500 "
            >
              Read More
            </button>
            <div className="flex gap-6 py-4">
              <ImFacebook color="white" />

              <ImTwitter color="white" />

              <ImYoutube color="white" />
            </div>
          </div>
        </div>
        <div className="w-4/6 ">
          <img
            src={"/images/post.jpg"}
            className=" object-cover h-full w-screen"
          />
        </div>
      </div>
    </section>
  );
}
