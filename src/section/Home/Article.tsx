import Link from 'next/link';
import Image from '@/components/Image';
import Spinner from '@/components/Spinner';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getArticle } from '@/services/article';

import type { FC } from 'react';
import type { ArticleContentProps } from '@/services/article';

const ArticleContent: FC<ArticleContentProps> = ({ title, image, slug, isSmallCard }) => {
  return (
    <Link
      href={'https://pandooin.com/blog/article/' + slug}
      target='_blank'
      rel='noopener noreferrer'
      className='group'
    >
      <div className={`${isSmallCard ? 'h-48 sm:h-28 lg:h-40' : 'h-48 sm:h-[316px] lg:h-[424px]'} w-full relative block`}>
        <Image
          src={image ?? ''}
          alt='article-img'
          fill
          priority
          className='object-cover lg:filter lg:grayscale lg:group-hover:grayscale-0 duration-200'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='bg-green text-white font-bold px-3 py-2 sm:text-sm lg:text-base'>
        <p className={isSmallCard ? 'line-clamp-2' : 'line-clamp-1'}>{title}</p>
      </div>
    </Link>
  );
};

const Article = () => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const { data, isLoading } = useQuery({
    queryFn: async () => await getArticle(),
    queryKey: ['article'],
    enabled: !isDataFetched
  });

  useEffect(() => {
    if (data && !isLoading) setIsDataFetched(true);
  }, [data, isLoading]);
  return (
    <div id='article' className='flex justify-center px-4 py-8 sm:py-12 w-full relative'>
      <div className='w-full max-w-7xl h-full'>
        <h3 className='header-unbounded text-2xl sm:text-3xl text-green font-bold'>Article</h3>
        <p className='text-green my-2 sm:text-xl'>Our curated writings, offering something for every reader.</p>
        {isLoading ? (
          <>
            <div className='flex justify-center mt-12'>
              <Spinner />
            </div>
            <div className='text-center mt-4'>Preparing our awesome writings....</div>
          </>
        ) : (
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <ArticleContent {...data?.[0]!} />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {data?.slice(1).map((item, index) => (
                <ArticleContent key={'item' + index + 1} {...item} isSmallCard />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
