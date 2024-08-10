import Image from 'next/image';
import Link from 'next/link';
import IllustrationSm from '@/assets/custom-your-trip/illustration-sm.png';
import IllustrationLg from '@/assets/custom-your-trip/illustration-lg.png';

const CustomYourTrip = () => {
  return (
    <div
      id='discover-tailored-experience'
      className='flex justify-center px-4 py-8 sm:py-12 w-full relative'
    >
      <div className='w-full max-w-7xl h-full block text-center sm:text-left sm:flex sm:justify-center sm:items-center gap-4 lg:gap-8'>
        <div className='flex justify-center md:hidden'>
          <Image src={IllustrationSm} alt='illustration' height={176} />
        </div>
        <Image src={IllustrationLg} alt='illustration' height={256} className='hidden md:block' />
        <div className='w-fit'>
          <h3 className='header-unbounded text-[#004040] text-[22px] leading-8 lg:text-[25px] font-bold'>
            Discover Tailored Experiences
          </h3>
          <p className='text-sm w-full max-w-[432px] mt-2'>
            Create your own journey, personalized to suit your preferences and interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>
          <Link
            href='https://pandooin.com/id/tailor-made/create?utm_source=zamrood&utm_medium=website&utm_campaign=premium'
            target='_blank'
            rel='noopener noreferrer'
            className='relative sm:px-6 py-3 mt-4 w-full sm:w-fit flex justify-center btn-solid dark-green hover-gold'
          >
            Customize Your Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomYourTrip;
