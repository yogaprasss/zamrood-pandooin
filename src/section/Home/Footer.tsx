import Image from 'next/image';
import Link from 'next/link';
import footerItems from '@/data/footer-items';

const Footer = () => {
  return (
    <div className='flex justify-center p-4 w-full relative bg-dark-green'>
      <div className='w-full max-w-7xl h-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
        <h3 className='text-white text-sm sm:text-base'>
          © 2024 Zamrood by PT Teknologi Pandu Wisata
        </h3>
        <div className='flex gap-4'>
          {footerItems.map((item) => (
            <Link key={item.title} href={item.url} target='_blank' rel='noopener noreferrer' title={item.title}>
              <Image src={item.icon} alt='icon-socmed' height={24} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
