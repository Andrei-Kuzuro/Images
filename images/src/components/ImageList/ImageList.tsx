import { useEffect, useState } from "react";
import { Image, IProps } from "../Image/Image";
import styles from "./ImageList.module.css";

export const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((result) => {
        setImages(result);
      });
  }, []);

  return (
    <div className={styles.container}>
      {images.map((item: IProps, index) => {
        return (
          <Image
            key={index}
            id={item.id}
            url={item.url}
            title={item.title}
            thumbnailUrl={item.thumbnailUrl}
          />
        );
      })}
    </div>
  );
};
