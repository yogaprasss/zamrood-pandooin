import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

import { useContext } from 'react';
import { ScrollHandlerContext } from '@/pages/_app';

const Navbar = () => {
  const { isScrolled } = useContext(ScrollHandlerContext);

  return (
    <div className={isScrolled ? styles['navbar-scrolled'] : styles.navbar}>
      <div className='w-full max-w-7xl bg-green-500'>Header</div>
    </div>
  );
};

export default Navbar;
