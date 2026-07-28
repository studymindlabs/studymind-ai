export type NoteStatus =
  | "draft"
  | "published"
  | "archived";

export interface Note {
  id: string;

  title: string;

  content: string;

  summary?: string;

  folder?: string;

  favorite: boolean;

  pinned: boolean;

  status: NoteStatus;

  createdAt: string;

  updatedAt: string;
}