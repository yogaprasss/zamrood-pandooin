import Link from 'next/link';
import Image from '@/components/Image';
import Spinner from '@/components/Spinner';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDestination } from '@/services/destination';
import { formatCurrency } from '@/utils/string';

import type { FC } from 'react';
import type { DestinationContentProps } from '@/services/destination';

const ExploreMoreButton = () => {
  return (
    <Link href='/destination' className='group flex items-center gap-3 cursor-pointer'>
      <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' className='stroke-dark-green sm:group-hover:stroke-gold transition-colors ease-in-out duration-300'>
        <path d='M17.6458 14.1471C17.8407 13.9515 18.1573 13.9509 18.3529 14.1458L23.8374 19.6108C24.0531 19.8257 24.0531 20.1751 23.8374 20.39L18.3529 25.855C18.1573 26.0499 17.8407 26.0493 17.6458 25.8537C17.4509 25.6581 17.4515 25.3415 17.6471 25.1466L22.8117 20.0004L17.6471 14.8542C17.4515 14.6593 17.4509 14.3427 17.6458 14.1471Z' fill='#004040'></path>
        <rect x='1' y='1' width='38' height='38' rx='19' strokeWidth='2'></rect>
      </svg>
      <span className='text-dark-green sm:group-hover:text-gold transition-colors ease-in-out duration-300 font-bold'>
        EXPLORE MORE
      </span>
    </Link>
  );
};

const DestinationContent: FC<DestinationContentProps> = ({
  id,
  title,
  description,
  organizer,
  price,
  discountPrice,
  images,
  duration,
  slug,
  isSmallCard,
  isContentOnRight
}) => {
  const [indexImg, setIndexImg] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImg((value) => value === images.length - 1 ? 0 : value + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col ${!isSmallCard && 'sm:flex-row'} gap-4`}>
      <div className={`w-full h-56 sm:h-96 relative block ${isContentOnRight && 'sm:hidden'}`}>
        <Image
          src={images[indexImg]}
          alt={'img' + id}
          fill
          priority
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div>
          <p className='uppercase mb-2 text-sm sm:text-base'>
            {duration} Day{duration > 1 ? 's' : ''}
            {duration > 1 ? ` ${duration - 1} Night${duration - 1 > 1 ? 's' : ''}` : ''}
          </p>
          <h2 className='text-green text-xl sm:text-3xl font-bold line-clamp-2'>{title}</h2>
          <p className='text-dark-green text-xs sm:text-sm font-bold my-2 hidden sm:block'>
            Organized by {organizer}
          </p>
          <p className='text-dark-green text-sm sm:text-base line-clamp-4 my-2 sm:my-0'>{description}</p>
          <p className='text-dark-green text-xs sm:text-sm font-bold block sm:hidden'>
            Organized by {organizer}
          </p>
        </div>
        <div className='flex justify-between items-end mt-8 sm:mt-0'>
          <div>
            <p className='text-sm sm:text-base text-dark-green'>Start from</p>
            {discountPrice > 0 && (
              <h4 className='text-[#B8B8B8] text-base sm:text-lg font-bold line-through'>
                {formatCurrency(price)}
              </h4>
            )}
            <h3 className='text-green text-xl sm:text-2xl font-bold'>
              {formatCurrency(discountPrice || price)}
            </h3>
          </div>
          <Link
            href={`/destination/${slug}`}
            className='px-2.5 py-2 sm:px-4 sm:py-3 text-sm sm:text-base btn-outlined green hover-green'
          >
            See Details
          </Link>
        </div>
      </div>
      <div className={`w-full h-96 relative hidden ${isContentOnRight && 'sm:block'}`}>
        <Image
          src={images[indexImg]}
          alt={'img' + id}
          fill
          priority
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
    </div>
  );
};

const Destinations = () => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const { data, isLoading } = useQuery({
    queryFn: async () => await getDestination(),
    queryKey: ['destination'],
    enabled: !isDataFetched
  });

  useEffect(() => {
    if (data && !isLoading) setIsDataFetched(true);
  }, [data, isLoading]);

  return (
    <div id='destination' className='flex justify-center px-4 py-8 sm:py-12 w-full relative'>
      <div className='w-full max-w-7xl h-full'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6'>
          <h3 className='header-unbounded text-2xl sm:text-3xl text-dark-green font-bold'>Destinations</h3>
          <ExploreMoreButton />
        </div>
        {isLoading && (
          <>
            <div className='flex justify-center mt-12'>
              <Spinner />
            </div>
            <div className='text-center mt-4'>Preparing our awesome destination....</div>
          </>
        )}
        <div className='mt-12 flex flex-col gap-12'>
          {data?.slice(0, 3)?.map((item, index) => (
            <DestinationContent key={item.id} {...item} isContentOnRight={index % 2 === 1} />
          ))}
        </div>
        <div className='mt-12 flex justify-center sm:justify-end'>
          <ExploreMoreButton />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
