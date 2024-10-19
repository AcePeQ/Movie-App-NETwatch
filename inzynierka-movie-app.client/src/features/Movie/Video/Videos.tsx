import { VideoType } from "../../../utils/types";
import styles from "./Videos.module.css";

function Videos({ videos }: { videos: VideoType[] }) {
  return (
    <div className={styles.videos_container}>
      {videos.map((video) => (
        <Video key={video.key} video={video} />
      ))}
    </div>
  );
}

function Video({ video }: { video: VideoType }) {
  return (
    <div className={styles.video_container}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${video.key}`}
        allowFullScreen={true}
        loading="lazy"
        title={video.name}
      ></iframe>
    </div>
  );
}

export default Videos;
