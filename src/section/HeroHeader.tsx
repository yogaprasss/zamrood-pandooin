import Link from 'next/link';
import styles from '@/styles/hero-header.module.css';
import { useEffect } from 'react';

const HeroHeader = () => {
  return (
    <div className={styles['hero-header-container']}>
      <div className='w-full max-w-7xl h-full flex items-center'>
        <div className='text-center sm:text-left w-full sm:w-[600px]'>
          <h3 className={`header-signature ${styles['hero-header-title']}`}>
            Premium Travel
          </h3>
          <h4 className={`header-unbounded ${styles['hero-header-subtitle']}`}>
            Beyond Expectation
          </h4>
          <p className='text-[#FAF9F5] sm:text-[20.25px] sm:leading-7 mt-2'>
            Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way
          </p>
          <br />
          <br />
          <Link
            href='#destination'
            className={styles['hero-header-cta']}
          >
            Take me there
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
