import { NextPage } from 'next';
import Image from 'next/image';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import Header from '@/components/Header';

import styles from '@/styles/components/slick.module.scss';

const SlickPage: NextPage = () => {
  const images = useMemo(
    () => [
      '/images/mainvisual1.jpg',
      '/images/mainvisual2.jpg',
      '/images/mainvisual3.jpg',
      '/images/mainvisual4.jpg',
      '/images/mainvisual5.jpg',
    ],
    [],
  );

  const [imageWidth, setImageWidth] = useState(500);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setImageWidth(windowWidth > 800 ? 500 : windowWidth > 500 ? 300 : 200);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const prevBtnId = useId();
  const nextBtnId = useId();

  const onClickBtn = useCallback(
    (type: 'prev' | 'next') => {
      if (type === 'prev' && currentIndex <= 0) return;
      if (type === 'next' && currentIndex >= images.length - 1) return;
      if (type === 'prev') {
        setCurrentIndex((prev) => --prev);
      }
      if (type === 'next') {
        setCurrentIndex((prev) => ++prev);
      }
    },
    [currentIndex, images],
  );

  useEffect(() => {
    const newTransformX = -currentIndex * imageWidth;
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(${newTransformX}px)`;
    }
  }, [currentIndex, imageWidth]);

  return (
    <>
      <Header />
      <main className={styles.slick}>
        <div className={styles.slick__content}>
          <button
            onClick={() => onClickBtn('prev')}
            className={styles.slick__prevBtn}
            type='button'
            aria-describedby={prevBtnId}
          >
            &lt;
          </button>
          <button
            onClick={() => onClickBtn('next')}
            className={styles.slick__nextBtn}
            type='button'
            aria-describedby={nextBtnId}
          >
            &gt;
          </button>
          <p className='no-view' id={prevBtnId}>
            このボタンを押すと前の画像を表示します
          </p>
          <p className='no-view' id={nextBtnId}>
            このボタンを押すと次の画像を表示します
          </p>
          <div className={styles.slick__slideWrap} tabIndex={0} role='button'>
            <div className={styles.slick__slides} ref={slideRef}>
              {images.map((image, index) => (
                <Image
                  key={image}
                  className={styles.slick__image}
                  src={image}
                  width={500}
                  height={500}
                  alt='画像'
                  loading='lazy'
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SlickPage;
