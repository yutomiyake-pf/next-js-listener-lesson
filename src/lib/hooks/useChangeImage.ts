import { useState } from 'react';

const useChangeImage = (images: string[]) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onMouseEnter = (targetIndex: number) => {
    if (!images[targetIndex]) return;
    setCurrentImageIndex(targetIndex);
  };

  return { currentImageIndex, onMouseEnter };
};

export default useChangeImage;
