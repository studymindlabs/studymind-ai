export type FolderItem = {
  id: string;
  name: string;
  color: string;
};

export const mockFolders: FolderItem[] = [
  {
    id: "all",
    name: "All",
    color: "#2563eb",
  },
  {
    id: "ai",
    name: "AI",
    color: "#9333ea",
  },
  {
    id: "backend",
    name: "Backend",
    color: "#16a34a",
  },
  {
    id: "programming",
    name: "Programming",
    color: "#ea580c",
  },
];