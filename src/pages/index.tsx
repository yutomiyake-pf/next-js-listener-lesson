import { NextPage } from 'next';
import ChangeImage from '@/components/ChangeImage';
import Header from '@/components/Header';
const IndexPage: NextPage = () => {
  const images = [
    '/images/mainvisual1.jpg',
    '/images/mainvisual2.jpg',
    '/images/mainvisual3.jpg',
    '/images/mainvisual4.jpg',
    '/images/mainvisual5.jpg',
  ];
  return (
    <>
      <Header />
      <ChangeImage images={images} />
    </>
  );
};

export default IndexPage;
