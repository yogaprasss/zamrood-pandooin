import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Separator from '@/components/Separator';

import { useCallback, useEffect, useState } from 'react';
import { Thumbnails, Zoom, Fullscreen } from 'yet-another-react-lightbox/plugins';
import { footageMobile, footageDesktop } from '@/data/footages';

import type { FC } from 'react';
import type { SlideImage } from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface FooterMobileProps {
  images: string[];
  onClick: (index: number) => void;
}

const FootageMobile: FC<FooterMobileProps> = ({ images, onClick }) => {
  const [indexImg, setIndexImg] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImg((value) => value === images.length - 1 ? 0 : value + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onClickImg = useCallback(() => onClick(indexImg), [indexImg]);

  return (
    <div className='w-full h-56 sm:h-96 relative block' onClick={onClickImg}>
      <Image
        src={images[indexImg]}
        alt='footage'
        className='object-cover' 
        fill
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  )
};

const Footage = () => {
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<SlideImage[]>([]);

  const toggleLightbox = useCallback(() => {
    setIsOpenLightbox((value) => !value);
  }, []);

  const initializeLighboxItems = useCallback((index: number, isMobile: boolean = false) => {
    const list = (isMobile ? footageMobile : footageDesktop).map((src, index) => ({ index, src }));
    const modifier = list.length - index;
    const sortedList = list
      .sort((a, b) => ((a.index + modifier) % list.length) - ((b.index + modifier) % list.length))
      .map(({ src }) => ({ src } as SlideImage));

    setLightboxItems(sortedList);
    toggleLightbox();
  }, []);

  return (
    <>
      <div id='footage' className='flex justify-center px-4 py-8 sm:py-12 w-full relative bg-gold'>
        <div className='w-full max-w-7xl h-full'>
          <div>
            <h3 className='header-signature text-5xl md:text-6xl lg:text-[72px] leading-none text-green'>
              Luxury Footage
            </h3>
            <div className='w-full mt-4 block sm:hidden'>
              <FootageMobile
                images={footageMobile}
                onClick={(index) => initializeLighboxItems(index, true)}
              />
            </div>
            <div className='w-full mt-8 hidden sm:block'>
              <div className='grid grid-cols-3 gap-4'>
                {footageDesktop.slice(0, 3).map((item, index) => (
                  <div
                    key={'item' + index + 1}
                    className='w-full aspect-[3/2] relative block'
                    onClick={() => initializeLighboxItems(index)}
                  >
                    <Image
                      src={item}
                      alt='footage'
                      className='object-cover' 
                      fill
                      priority
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                ))}
              </div>
              <div className='my-4'>
                <Separator isWhite />
              </div>
              <div className='grid grid-cols-3 gap-4'>
                {footageDesktop.slice(3).map((item, index) => (
                  <div
                    key={'item' + index + 4}
                    className='w-full aspect-[3/2] relative block'
                    onClick={() => initializeLighboxItems(index + 3)}
                  >
                    <Image
                      src={item}
                      alt='footage'
                      className='object-cover' 
                      fill
                      priority
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        plugins={[Thumbnails, Fullscreen, Zoom]}
        open={isOpenLightbox}
        close={toggleLightbox}
        slides={lightboxItems}
      />
    </>
  );
};

export default Footage;
