interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

async function getTopStoriesIds(): Promise<number[]> {
  try {
    const rawResponse = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json",
    );

    const response = await rawResponse.json();

    return response;
  } catch (error) {
    // Do something
    return null;
  }
}

async function getTopStories(): Promise<IStory[]> {
  const IDs = await getTopStoriesIds();

  const stories: unknown[] = await Promise.allSettled(
    IDs.map((id) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
        (raw) => raw.json(),
      ),
    ),
  );

  return stories
    .filter((story: any) => story.status === "fulfilled")
    .map((story: any) => story.value);
}

export default async function HomeScreen() {
  const stories = await getTopStories();

  return (
    <main className="text-neutral-400 p-4 bg-neutral-900 transition">
      <div className="max-w-[1024px] mx-auto mb-8">
        <h1 className="text-white text-lg font-bold">Neorank (Top Stories)</h1>
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
      <ul className="max-w-[1024px] mx-auto flex flex-col gap-8">
        {stories.map((story, index) => (
          <li>
            <a
              className="hover:text-white w-full font-medium block p-3 border border-neutral-800 rounded-lg hover:shadow-lg transition relative"
              href={story.url}
            >
              <div className="text-xs w-6 h-6 bg-neutral-800 rounded-full flex justify-center items-center absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
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
    </main>
  );
}
