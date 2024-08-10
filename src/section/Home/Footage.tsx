import Image from 'next/image';

import { useEffect, useState } from 'react';
import { footageMobile, footageDesktop } from '@/data/footages';

import type { FC } from 'react';
import type { StaticImageData } from 'next/image';

interface FooterMobileProps {
  images: StaticImageData[];
}

const FootageMobile: FC<FooterMobileProps> = ({ images }) => {
  const [indexImg, setIndexImg] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImg((value) => value === images.length - 1 ? 0 : value + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-56 sm:h-96 relative block'>
      <Image src={images[indexImg]} alt='footage' layout='fill' className='object-cover' />
    </div>
  )
};

const Footage = () => {
  return (
    <div id='footage' className='flex justify-center px-4 py-8 sm:py-12 w-full relative bg-gold'>
      <div className='w-full max-w-7xl h-full'>
        <div>
          <h3 className='header-signature text-5xl sm:text-[72px] leading-none text-green'>
            Luxury Footage
          </h3>
          <div className='w-full mt-4 block sm:hidden'>
            <FootageMobile images={footageMobile} />
          </div>
          <div className='w-full mt-8 hidden sm:block'>
            <div className='grid grid-cols-3 gap-4'>
              {footageDesktop.slice(0, 3).map((item) => (
                <div className='w-full h-56 md:h-64 lg:h-96 relative block'>
                  <Image src={item} alt='footage' layout='fill' className='object-cover' />
                </div>
              ))}
            </div>
            <div className='h-12 my-4'></div>
            <div className='grid grid-cols-3 gap-4'>
              {footageDesktop.slice(3).map((item) => (
                <div className='w-full h-56 md:h-64 lg:h-96 relative block'>
                  <Image src={item} alt='footage' layout='fill' className='object-cover' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footage;
