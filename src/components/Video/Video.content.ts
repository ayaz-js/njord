import { t, type Dictionary } from "intlayer";

const VideoContent = {
  key: "video",
  content: {
    title: t({
      ru: "Видео о нашей работе",
      en: "Video About Our Work",
    }),
  },
} satisfies Dictionary;

export default VideoContent;
