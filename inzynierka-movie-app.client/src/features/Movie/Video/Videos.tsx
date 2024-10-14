import styles from "./Videos.module.css";

type Video = {
  key: string;
  name: string;
  official: boolean;
  site: string;
  type: string;
};

function Videos({ videos }: { videos: Video[] }) {
  return (
    <div className={styles.videos_container}>
      {videos.map((video) => (
        <Video key={video.key} video={video} />
      ))}
    </div>
  );
}

function Video({ video }: { video: Video }) {
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
