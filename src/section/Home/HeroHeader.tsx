import Link from 'next/link';
import styles from '@/styles/hero-header.module.css';

const HeroHeader = () => {
  return (
    <div className={styles.container}>
      <div className='w-full max-w-7xl h-full flex items-center'>
        <div className={styles.content}>
          <h3 className={`header-signature ${styles.title}`}>Premium Travel</h3>
          <h4 className={`header-unbounded ${styles.subtitle}`}>Beyond Expectation</h4>
          <p className={styles.description}>
            Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way
          </p>
          <br />
          <br />
          <Link href='#destination' className='btn-outlined white hover-gold py-4 px-5'>
            Take me there
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
