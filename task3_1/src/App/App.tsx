import React, { FC, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import PhotoCard from "../components/PhotoCard/PhotoCard";
import PhotoModal from "../components/PhotoModal/PhotoModal";

interface DataType {
  previewURL: string;
  webformatURL: string;
}

const App: FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/images.json");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      const filteredData = data.filter(
        (item: DataType) => item.previewURL && item.webformatURL
      );
      setData(filteredData);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = (webformatURL: string) => {
    setSelectedImage(webformatURL);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <PhotoCard
            key={index}
            previewURL={item.previewURL}
            title={`Image ${index + 1}`}
            onClick={() => handleCardClick(item.webformatURL)}
          />
        ))}
      </div>
      {selectedImage && (
        <PhotoModal webformatURL={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
