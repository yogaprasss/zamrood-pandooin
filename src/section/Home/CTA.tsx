import Image from 'next/image';
import Link from 'next/link';
import ImgBg from '@/assets/cta-bg.jpg';
import Logo from '@/assets/logo-white.png';
import ArrowGoIcon from '@/assets/icons/go-white.svg';

const CTA = () => {
  return (
    <div id='cta' className='flex justify-center px-4 py-8 sm:py-12 w-full relative'>
      <div className='w-full max-w-7xl h-full relative'>
        <div className='w-full h-44 sm:h-28 relative block'>
          <Image
            src={ImgBg}
            alt='cta-bg' 
            className='object-cover' 
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <div id='bg-filter' className='w-full h-44 sm:h-28 absolute bg-black top-0 opacity-[0.36]' />
        <div className='w-full h-44 sm:h-28 absolute top-0 p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <div className='w-full flex justify-center sm:justify-start'>
            <Image src={Logo} alt='logo' height={56} />
          </div>
          <div className='w-full h-20 sm:h-14 flex flex-col justify-between items-center sm:items-end text-white'>
            <p className='text-center'>Want to see other destinations? Check us out at our website</p>
            <Link
              href='https://pandooin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white underline font-bold text-lg flex items-center gap-1'
            >
              <span className='leading-6'>Pandooin.com</span>
              <Image src={ArrowGoIcon} alt='arrow-go' height={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
