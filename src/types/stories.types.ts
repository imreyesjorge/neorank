/**
 * Represents a story from Hacker News.
 */
export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

/**
 * Represents the different categories of stories available.
 */
export const CATEGORY = {
  TOPSTORIES: {
    value: "topstories",
    label: "Top Stories",
  },
  NEWSTORIES: {
    value: "newstories",
    label: "New Stories",
  },
  BESTSTORIES: {
    value: "beststories",
    label: "Best Stories",
  },
} as const;

/**
 * Type representing the possible values of CATEGORY.
 */
export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];
