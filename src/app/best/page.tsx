import { Stories } from "../../components/Stories/Stories";
import { CATEGORY } from "../../types/stories.types";
import { getStories } from "../../utils/getStories";

export default async function BestScreen() {
  const stories = await getStories(CATEGORY.BESTSTORIES);

  return <Stories category={CATEGORY.BESTSTORIES} />;
}
