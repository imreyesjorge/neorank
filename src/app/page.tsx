import { Stories } from "../components/Stories/Stories";
import { CATEGORY } from "../types/stories.types";
import { getStories } from "../utils/getStories";

export default async function HomeScreen() {
  const stories = await getStories(CATEGORY.TOPSTORIES);

  return <Stories category={CATEGORY.TOPSTORIES} />;
}
