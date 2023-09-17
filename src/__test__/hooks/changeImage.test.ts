import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useChangeImage from '@/lib/hooks/useChangeImage';

describe('changeImageのテスト', () => {
  describe('useChangeImageのテスト', () => {
    const images = [
      '/images/mainvisual1.jpg',
      '/images/mainvisual2.jpg',
      '/images/mainvisual3.jpg',
      '/images/mainvisual4.jpg',
      '/images/mainvisual5.jpg',
    ];

    const entries = Array.from(images.entries());

    test('currentImageIndexの初期値が0である', () => {
      const { result } = renderHook(() => useChangeImage(images));
      expect(result.current.currentImageIndex).toBe(0);
    });

    test.each(entries)(
      'imagesのindex番号%iを関数に渡すとcurrentImageIndexは%#になる',
      (index, _) => {
        const { result } = renderHook(() => useChangeImage(images));
        act(() => {
          result.current.onMouseEnter(index);
        });
        expect(result.current.currentImageIndex).toBe(index);
      },
    );
  });
});
