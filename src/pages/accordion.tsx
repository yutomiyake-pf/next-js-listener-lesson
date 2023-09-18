import { NextPage } from 'next';
import { useState } from 'react';
import Header from '@/components/Header';

import useAccordion from '@/lib/hooks/useAccordion';
import styles from '@/styles/components/accordion.module.scss';

const AccordionPage: NextPage = () => {
  const { openIndex, onClickListTitle, accordionList } = useAccordion();

  return (
    <>
      <Header />
      <main className={styles.accordion}>
        <section className={styles.accordion__content}>
          <h1 className={styles.accordion__title}>募集職種</h1>
          <ol>
            {accordionList.map((item, index) => (
              <li key={item.title} className={styles.accordion__list}>
                <div
                  role='button'
                  tabIndex={0}
                  className={`${styles.accordion__listTitle} ${
                    index === openIndex ? styles['accordion__listTitle--active'] : ''
                  }`}
                  onClick={() => onClickListTitle(index)}
                  onKeyDown={() => onClickListTitle(index)}
                  aria-expanded={index === openIndex}
                >
                  {item.title}
                </div>
                <div
                  className={`${styles.accordion__menu} ${
                    index === openIndex ? styles['accordion__menu--active'] : ''
                  }`}
                >
                  <dl className={styles.accordion__definitionList}>
                    <div className={styles.accordion__definitionWrap}>
                      <dt className={styles.accordion__definitionTerm}>仕事内容</dt>
                      <dd className={styles.accordion__definitionDes}>{item.jobDes}</dd>
                    </div>
                    <div className={styles.accordion__definitionWrap}>
                      <dt className={styles.accordion__definitionTerm}>応募資格</dt>
                      <dd className={styles.accordion__definitionDes}>{item.QR}</dd>
                    </div>
                    <div className={styles.accordion__definitionWrap}>
                      <dt className={styles.accordion__definitionTerm}>必須スキル</dt>
                      <dd className={styles.accordion__definitionDes}>{item.skill}</dd>
                    </div>
                    <div className={styles.accordion__definitionWrap}>
                      <dt className={styles.accordion__definitionTerm}>給与</dt>
                      <dd className={styles.accordion__definitionDes}>
                        {`${item.salary_start} ~ ${item.salary_end}`}
                        <small>(スキル・経験・実績により優遇)</small>
                      </dd>
                    </div>
                    <div className={styles.accordion__definitionWrap}>
                      <dt className={styles.accordion__definitionTerm}>休日休暇</dt>
                      <dd className={styles.accordion__definitionDes}>{item.vacation}</dd>
                    </div>
                    <div className={styles.accordion__definitionWrap}>
                      <dt className={styles.accordion__definitionTerm}>雇用形態</dt>
                      <dd className={styles.accordion__definitionDes}>{item.employment_status}</dd>
                    </div>
                    <div className={styles.accordion__definitionWrap}>
                      <dt className={styles.accordion__definitionTerm}>勤務時間</dt>
                      <dd className={styles.accordion__definitionDes}>{item.working_hours}</dd>
                    </div>
                    <div className={styles.accordion__definitionWrap}>
                      <dt className={styles.accordion__definitionTerm}>勤務地</dt>
                      <dd className={styles.accordion__definitionDes}>{item.place}</dd>
                    </div>
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
