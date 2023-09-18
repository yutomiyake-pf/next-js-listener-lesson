import { act, renderHook } from '@testing-library/react';
import useAccordion from '@/lib/hooks/useAccordion';

describe('accordionのテスト', () => {
  describe('useAccordionのテスト', () => {
    const { result } = renderHook(() => useAccordion());

    test('openIndexの初期値はnullである', () => {
      const { result } = renderHook(() => useAccordion());
      expect(result.current.openIndex).toBeNull();
    });

    test('accordionListの配列の長さは3である', () => {
      const { result } = renderHook(() => useAccordion());
      expect(result.current.accordionList.length).toBe(3);
    });

    const keys = [
      'title',
      'jobDes',
      'QR',
      'skill',
      'salary_start',
      'salary_end',
      'vacation',
      'employment_status',
      'working_hours',
      'place',
    ];
    test.each(keys)('accordionListの各要素は%#のキーを持つ', (key) => {
      const { result } = renderHook(() => useAccordion());
      result.current.accordionList.forEach((item) => {
        expect(item).toHaveProperty(key);
      });
    });

    const list = Array.from(result.current.accordionList.entries());
    test.each(list)(
      'accordionListのindex番号%iをonClickListTitleの引数に渡すとopenIndexは%iになる。\n同じ数字をonClickListTitleに入れるとopenIndexはnullになる',
      (index, _) => {
        const { result } = renderHook(() => useAccordion());

        act(() => {
          result.current.onClickListTitle(index);
        });
        expect(result.current.openIndex).toBe(index);

        act(() => {
          result.current.onClickListTitle(index);
        });

        expect(result.current.openIndex).toBeNull();
      },
    );
  });
});
