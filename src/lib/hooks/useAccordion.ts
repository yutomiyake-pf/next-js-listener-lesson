import { useState } from 'react';

export default function useAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionList = [
    {
      title: 'WEB ディレクター',
      jobDes: 'テキストテキストテキストテキスト',
      QR: 'テキストテキストテキストテキスト',
      skill: 'テキストテキストテキストテキスト',
      salary_start: 500,
      salary_end: 800,
      vacation: '土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇',
      employment_status: '正社員 （試用期間3ヶ月）\n業務委託',
      working_hours: 'フレックスタイム',
      place: '東京',
    },
    {
      title: 'WEB デザイナー',
      jobDes: 'テキストテキストテキストテキスト',
      QR: 'テキストテキストテキストテキスト',
      skill: 'テキストテキストテキストテキスト',
      salary_start: 500,
      salary_end: 800,
      vacation: '土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇',
      employment_status: '正社員 （試用期間3ヶ月）\n業務委託',
      working_hours: 'フレックスタイム',
      place: '東京',
    },
    {
      title: 'プログラマー',
      jobDes: 'テキストテキストテキストテキスト',
      QR: 'テキストテキストテキストテキスト',
      skill: 'テキストテキストテキストテキスト',
      salary_start: 500,
      salary_end: 800,
      vacation: '土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇',
      employment_status: '正社員 （試用期間3ヶ月）\n業務委託',
      working_hours: 'フレックスタイム',
      place: '東京',
    },
  ];

  const onClickListTitle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return { openIndex, onClickListTitle, accordionList };
}
