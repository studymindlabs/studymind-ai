export const editorConfig = {
  placeholder: "Start writing your notes...",

  autofocus: true,

  spellcheck: true,

  characterLimit: 50000,

  enableSlashCommand: true,

  enableFloatingMenu: true,

  enableBubbleMenu: true,

  enableImageUpload: true,

  enableTables: true,

  enableCodeBlock: true,

  enableTaskList: true,

  enableBlockquote: true,

  enableHighlight: true,
} as const;

export type EditorConfig = typeof editorConfig;