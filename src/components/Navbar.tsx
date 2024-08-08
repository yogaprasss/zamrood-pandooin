import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/navbar.module.css';
import LogoWhite from '@/assets/logo-white.png';
import LogoColor from '@/assets/logo-color.png';
import MenuIcon from '@/assets/icons/menu.svg';
import MenuIconWhite from '@/assets/icons/menu-white.svg';
import CloseIcon from '@/assets/icons/close.svg';
import navigationItems from '@/data/navigation-items';

import { useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ScrollHandlerContext } from '@/pages/_app';

const Navbar = () => {
  const { isScrolled } = useContext(ScrollHandlerContext);
  const { asPath } = useRouter();
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = useCallback(() => setIsShowMenu((value) => !value), []);

  return (
    <>
      <div className={isScrolled ? styles['navbar-scrolled'] : styles.navbar}>
        <div className='w-full max-w-7xl flex justify-between items-center'>
          <Image src={isScrolled ? LogoColor : LogoWhite} alt='logo' height={50} />
          <div className='hidden lg:flex items-center gap-4'>
            {navigationItems.map((item) => {
              const isActive = item.id === 'homepage' ? asPath === '/' : asPath.includes(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={isActive ? styles['nav-item-active'] : styles['nav-item']}
                >
                  {item.title}
                </Link>
              );
            })}
            <Link
              href='https://wa.me/6283831556160?text=Hi,%20I%20wanna%20ask%20question%20about%20Zamrood'
              target='_blank'
              rel='noopener noreferrer'
              className={styles['nav-item-btn']}
            >
              Need Assistance?
            </Link>
          </div>
          <div className='block lg:hidden'>
            <button className={styles['menu-btn']} onClick={toggleMenu}>
              <Image src={isScrolled ? MenuIcon : MenuIconWhite} alt='menu-btn' height={28} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles['menus-mobile-container']} ${!isShowMenu && styles.hidden}`}>
        <div
          className='flex-grow h-full bg-black opacity-60 sm:bg-transparent'
          onClick={toggleMenu}
        />
        <div className='h-full bg-[#faf9f5] px-4'>
          <div className='w-full h-[86px] flex justify-end items-center'>
            <button className={styles['close-btn']} onClick={toggleMenu}>
              <Image src={CloseIcon} alt='close-btn' height={28} />
            </button>
          </div>
          <div className={styles['menus-mobile']}>
            {navigationItems.map((item) => {
              const isActive = item.id === 'homepage' ? asPath === '/' : asPath.includes(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`${styles['nav-item-mobile']} ${isActive && styles.active}`}
                >
                  {item.title}
                </Link>
              );
            })}
            <Link
              href='https://wa.me/6283831556160?text=Hi,%20I%20wanna%20ask%20question%20about%20Zamrood'
              target='_blank'
              rel='noopener noreferrer'
              className={styles['nav-item-mobile-btn']}
            >
              Need Assistance?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
