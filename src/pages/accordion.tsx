import { NextPage } from 'next';
import { useState } from 'react';
import Header from '@/components/Header';

import styles from '@/styles/components/accordion.module.scss';

const AccordionPage: NextPage = () => {
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
  ];

  return (
    <>
      <Header />
      <main className={styles.accordion}>
        <section className={styles.accordion__content}>
          <h1 className={styles.accordion__title}>募集職種</h1>
          <ol>
            {accordionList.map((item, index) => (
              <li key={item.title}>
                <div className={styles.accordion__listTitle}>{item.title}</div>
                <div className={styles.accordion__menu}>
                  <dl>
                    <dt>仕事内容</dt>
                    <dd>{item.jobDes}</dd>
                    <dt>応募資格</dt>
                    <dd>{item.QR}</dd>
                    <dt>必須スキル</dt>
                    <dd>{item.skill}</dd>
                    <dt>給与</dt>
                    <dd>
                      {`${item.salary_start} ~ ${item.salary_end}`}{' '}
                      <small>(スキル・経験・実績により優遇)</small>
                    </dd>
                    <dt>休日休暇</dt>
                    <dd>{item.vacation}</dd>
                    <dt>雇用形態</dt>
                    <dd>{item.employment_status}</dd>
                    <dt>勤務時間</dt>
                    <dd>{item.working_hours}</dd>
                    <dt>勤務地</dt>
                    <dd>{item.place}</dd>
                  </dl>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
};

export default AccordionPage;
