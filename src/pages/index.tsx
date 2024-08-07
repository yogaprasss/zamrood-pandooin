import Head from 'next/head';
import Layout from '@/layout';
import HeroHeader from '@/section/Home/HeroHeader';
import OurServices from '@/section/Home/OurServices';

const Home = () => {
  return (
    <>
      <Head>
        <title>Zamrood by Pandooin | Premium Travel Experiences in Indonesia</title>
        <meta
          name='description'
          content='Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way'
        />
      </Head>
      <Layout>
        <HeroHeader />
        <OurServices />
      </Layout>
    </>
  );
}

export default Home;
