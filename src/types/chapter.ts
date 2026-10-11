
export type NarrationContent = {
    type: "narration";
    text: string;
};

export type DialogueContent = {
    type: "dialogue";
    character: string;
    text: string;
};

export type ImageContent = {
    type: "image";
    src: string;
    alt: string;
    description?: string;
};

/**
 * Texto exibido sobre o vídeo durante um intervalo de tempo.
 *
 * start e end são medidos em segundos a partir do início
 * do vídeo.
 */
export type VideoOverlay =
    | {
          type: "narration";
          start: number;
          end: number;
          text: string;
      }
    | {
          type: "dialogue";
          start: number;
          end: number;
          character: string;
          text: string;
      };

export type VideoContent = {
    type: "video";
    src: string;
    poster?: string;
    description?: string;
    overlays: VideoOverlay[];
};

export type SceneContent =
    | NarrationContent
    | DialogueContent
    | VideoContent
    | ImageContent;

export interface ChapterScene {
    id: string;
    title: string;
    contents: SceneContent[];
}

export interface Chapter {
    id: string;
    series: string;
    title: string;
    subtitle: string;
    synopsis?: string;
    scenes: ChapterScene[];
}
