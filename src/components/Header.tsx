import Link from 'next/link';
import { FC } from 'react';

import styles from '@/styles/components/header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__lists}>
          <li>
            <Link className={styles.header__link} href='/'>
              HOME
            </Link>
          </li>
          <li>
            <Link className={styles.header__link} href='/accordion'>
              アコーディオン
            </Link>
          </li>
          <li>
            <Link className={styles.header__link} href='/slick'>
              Slick
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
