import { Category, CATEGORY, Story } from "../types/stories.types";

const getStoriesIds = async (category: Category): Promise<number[]> => {
  try {
    const rawResponse = await fetch(
      `https://hacker-news.firebaseio.com/v0/${category.value}.json`,
      { cache: "no-store" }
    );

    const response = await rawResponse.json();

    if (response.error) {
      throw new Error();
    }

    return response;
  } catch (error) {
    return [];
  }
};

export const getStories = async (
  category: Category = CATEGORY.TOPSTORIES
): Promise<Story[]> => {
  const IDs = await getStoriesIds(category);

  const stories: unknown[] = await Promise.allSettled(
    IDs.map((id) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
        (raw) => raw.json()
      )
    )
  );

  return stories
    .filter((story: any) => story.status === "fulfilled")
    .map((story: any) => story.value);
};
