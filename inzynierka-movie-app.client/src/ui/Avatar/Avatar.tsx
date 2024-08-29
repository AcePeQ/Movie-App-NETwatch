import styles from "./Avatar.module.css";

interface AvatarProps {
  type: string;
}

function Avatar({ type }: AvatarProps) {
  return (
    <img
      src="/public/wendykiss.gif"
      className={`${styles[type]}`}
      alt="User avatar"
    />
  );
}

export default Avatar;
