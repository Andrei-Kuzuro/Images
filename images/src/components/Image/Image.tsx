import styles from "./Image.module.css";
import { useState } from "react";

export interface IProps {
  title: string;
  id: string;
  url: string;
  thumbnailUrl: string;
}

export const Image = ({ id, title, url, thumbnailUrl }: IProps) => {
  const [toggleImage, setToggleImage] = useState(false);

  return (
    <div className={styles.image}>
      <img
        className={toggleImage ? styles.active : undefined}
        src={thumbnailUrl}
        alt="image"
        onClick={() => setToggleImage(!toggleImage)}
      />
      <p>{title}</p>
    </div>
  );
};
