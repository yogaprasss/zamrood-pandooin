import Image from 'next/image';
import ourServices from '@/data/our-services';

const OurServices = () => {
  return (
    <div className='flex justify-center px-4 py-14 sm:py-20 w-full relative'>
      <div className='w-full max-w-7xl h-full'>
        <h3 className='header-signature text-[52px] sm:text-[80px] leading-none text-green text-center'>
          Beyond Premium
        </h3>
        <h4 className='header-unbounded sm:text-3xl leading-none text-dark-green sm:-mt-2 text-center font-bold'>
          ELEVATE YOUR EXPERIENCE
        </h4>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12'>
          {ourServices.map((service, index) => (
            <div key={'service-' + (index + 1)} className='text-center'>
              <div className='flex justify-center'>
                <Image src={service.img} alt={service.title} height={128} />
              </div>
              <h3 className='text-xl font-bold text-green sm:h-14 lg:h-auto mt-4'>
                {service.title}
              </h3>
              <p className='text-sm mt-2'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default OurServices;
