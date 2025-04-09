import Link from "next/link";
import { Category } from "../../types/stories.types";
import { getStories } from "../../utils/getStories";

type StoriesProps = {
  category: Category;
};

export async function Stories({ category }: StoriesProps) {
  const stories = await getStories(category);

  return (
    <main className="text-neutral-400 min-h-screen p-4 bg-neutral-900 transition">
      <div className="max-w-[1024px] mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-lg font-bold">
              Neorank ({category.label})
            </h1>
            <nav className="flex gap-4">
              <Link
                href="/"
                className={`text-xs ${
                  category.value === "topstories" ? "text-white underline" : ""
                }`}
              >
                Top
              </Link>
              <Link
                href="/new"
                className={`text-xs ${
                  category.value === "newstories" ? "text-white underline" : ""
                }`}
              >
                New
              </Link>
              <Link
                href="/best"
                className={`text-xs ${
                  category.value === "beststories" ? "text-white underline" : ""
                }`}
              >
                Best
              </Link>
            </nav>
          </div>
          <p className="text-sm">
            A sleek and minimal version of{" "}
            <a className="underline" href="https://news.ycombinator.com/">
              Hacker News
            </a>{" "}
            made with love by{" "}
            <a className="underline" href="https://reyes.cool">
              Jorge Reyes
            </a>
            .
          </p>
        </div>
        <ul className="flex flex-col gap-8">
          {stories.map((story, index) => (
            <li key={story.id}>
              <a
                className="group focus:text-white hover:text-white w-full font-medium block p-3 outline-none border border-neutral-800 focus:border-white rounded-lg hover:shadow-lg transition relative"
                href={story.url}
                tabIndex={1}
              >
                <div className="transition border border-transparent group-focus:border-white text-xs w-6 h-6 bg-neutral-800 rounded-full flex justify-center items-center absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
                  {index + 1}
                </div>
                <p>{story.title}</p>
                <div className="text-xs font-light flex justify-between">
                  <small>{story.score} points</small>
                  <small>by {story.by}</small>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
