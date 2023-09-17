import Image from 'next/image';
import { FC, memo, useState } from 'react';

import useChangeImage from '@/lib/hooks/useChangeImage';
import styles from '@/styles/imageList.module.scss';

interface Props {
  images: string[];
}

const ChangeImage: FC<Props> = ({ images }) => {
  const { currentImageIndex, onMouseEnter } = useChangeImage(images);
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

export default memo(ChangeImage);
