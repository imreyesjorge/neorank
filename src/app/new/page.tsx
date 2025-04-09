import { Stories } from "../../components/Stories/Stories";
import { CATEGORY } from "../../types/stories.types";
import { getStories } from "../../utils/getStories";

export default async function NewScreen() {
  const stories = await getStories(CATEGORY.NEWSTORIES);

  return <Stories category={CATEGORY.NEWSTORIES} />;
}
