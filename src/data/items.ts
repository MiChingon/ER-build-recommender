export type Item = {
  id: string;
  title: string;
  summary: string;
  description: string;
};

export const items: Item[] = [
  {
    id: "1",
    title: "Item One",
    summary: "A placeholder summary for the first item.",
    description:
      "This is a longer placeholder description for item one. It demonstrates how the detail page renders content for a single item selected from the list.",
  },
  {
    id: "2",
    title: "Item Two",
    summary: "A placeholder summary for the second item.",
    description:
      "Item two exists to show that navigation works correctly between multiple entries. The URL changes and the detail view updates accordingly.",
  },
  {
    id: "3",
    title: "Item Three",
    summary: "A placeholder summary for the third item.",
    description:
      "Item three rounds out the example set. Replace these entries with data from an API or local source in a real application.",
  },
  {
    id: "4",
    title: "Item Four",
    summary: "A placeholder summary for the fourth item.",
    description:
      "Item four shows the list scales naturally. Add as many entries as needed — the layout adapts.",
  },
  {
    id: "5",
    title: "Item Five",
    summary: "A placeholder summary for the fifth item.",
    description:
      "Item five demonstrates the final placeholder in this minimal example set.",
  },
];

export function getItem(id: string): Item | undefined {
  return items.find((item) => item.id === id);
}
