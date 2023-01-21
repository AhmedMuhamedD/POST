import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";

export default function header() {
  const handleClick = () =>
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  const handleSubs = () =>
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="shrink w-80 ">
          <Link href={"/"}>
            <a className="font-bold uppercase text-3xl">Post</a>
          </Link>
        </div>
        <div className="md:flex hidden w-96   flex justify-between cursor-pointer py-4 sm:py-0">
          <a onClick={handleClick}>Latest</a>
          <a onClick={handleClick}>Popular</a>
          <a onClick={handleSubs}>Subscribe</a>
        </div>

        <div className="w-96  flex justify-center">
          <div className="flex gap-6">
            <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
