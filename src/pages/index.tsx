import { NextPage } from 'next';
import Image from 'next/image';

import { MouseEvent, useState } from 'react';
import styles from '@/styles/imageList.module.scss';

const IndexPage: NextPage = () => {
  const images = [
    '/images/mainvisual1.jpg',
    '/images/mainvisual2.jpg',
    '/images/mainvisual3.jpg',
    '/images/mainvisual4.jpg',
    '/images/mainvisual5.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onMouseEnter = (targetIndex: number) => {
    if (!images[targetIndex]) return;
    setCurrentImageIndex(targetIndex);
  };

  return (
    <main className={styles.imageList}>
      <div className={styles.imageList__content}>
        <Image
          className={styles.imageList__bgImage}
          src={images[currentImageIndex]}
          alt={'大きい画像'}
          width={960}
          height={540}
          loading='lazy'
        />
        <ul className={styles.imageList__smallImageLists}>
          {images.map((image, index) => (
            <li
              className={styles.imageList__smallImageList}
              key={image}
              onMouseEnter={() => onMouseEnter(index)}
            >
              <Image
                className={styles.imageList__smallImage}
                src={image}
                alt={'小さい画像'}
                height={103}
                width={172}
                loading='lazy'
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default IndexPage;
