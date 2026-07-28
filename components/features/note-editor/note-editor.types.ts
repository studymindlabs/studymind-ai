export interface NoteDraft {
  title: string;
  content: string;
}

export interface EditorState extends NoteDraft {
  isDirty: boolean;
}