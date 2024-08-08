import Image from 'next/image';
import ourServices from '@/data/our-services';
import styles from '@/styles/our-services.module.css';

const OurServices = () => {
  return (
    <div className={styles.container}>
      <div className='w-full max-w-7xl h-full'>
        <h3 className={`header-signature ${styles.title}`}>Beyond Premium</h3>
        <h4 className={`header-unbounded ${styles.subtitle}`}>ELEVATE YOUR EXPERIENCE</h4>
        <div className={styles['services-container']}>
          {ourServices.map((service, index) => (
            <div key={'service-' + (index + 1)} className={styles.service}>
              <div className='flex justify-center'>
                <Image src={service.img} alt={service.title} height={128} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default OurServices;
