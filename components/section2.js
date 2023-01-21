import Link from "next/link";
import Image from "next/image";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section2() {
  const { data, isLoading, isError } = fetcher("api/posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="flex justify-between gap-6">
        <div className="grid lg:grid-cols-2  gap-14">
          {data.map((value, index) => (
            <Post data={value} key={index}></Post>
          ))}
        </div>
        <div>
          <input
            type="search"
            id="site-search"
            placeholder="search..."
            name="q"
            className="drop-shadow-lg w-full rounded-full p-2 focus:outline-none mb-6"
          />
          <div className="py-4 bg-slate-100 flex flex-col px-4 drop-shadow-lg my-6">
            <h3 className="font-bold text-lg pb-4">Categories</h3>
            <ul className="">
              <li className="py-2 border-b border-grey-500">Culture</li>
              <li className="py-2 border-b border-grey-400">Creativity</li>
              <li className="py-2 border-b border-grey-400">Food</li>
              <li className="py-2 border-b border-grey-400">Travel</li>
              <li className="py-2 border-b border-grey-400">Humor</li>
              <li className="py-2 border-b border-grey-400">Music</li>
              <li className="py-2 ">Culture</li>
            </ul>
          </div>
          <div className="py-4 bg-slate-100 flex flex-col px-4 drop-shadow-lg">
            <h3 className="font-bold text-lg pb-4">Top Posts</h3>
            <ul className="">
              <li className="py-4 border-b border-grey-500">
                <p className="text-sm font-bold">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however
                </p>
                <p className="text-xs py-4">Food Travel NOV 2022</p>
              </li>
              <li className="py-4 border-b border-grey-400">
                <p className="text-sm font-bold">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however
                </p>
                <p className="text-xs py-4">Food Travel NOV 2022</p>
              </li>
              <li className="py-4 border-b border-grey-400">
                <p className="text-sm font-bold">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however
                </p>
                <p className="text-xs py-4">Food Travel NOV 2022</p>
              </li>
              <li className="py-4 border-b border-grey-400">
                <p className="text-sm font-bold">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however
                </p>
                <p className="text-xs py-4">Food Travel NOV 2022</p>
              </li>
              <li className="py-4 ">
                <p className="text-sm font-bold">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however
                </p>
                <p className="text-xs py-4">Food Travel NOV 2022</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className="item bg-slate-100 drop-shadow-xl">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || "/"}
              className="rounded"
              width={600}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col p-4 ">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-orange-800">
              {category || "Unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              - {published || "Unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "Title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however .
        </p>
      </div>
    </div>
  );
}
