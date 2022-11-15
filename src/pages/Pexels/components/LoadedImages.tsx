import { Grid } from 'antd';
import CustomImage from 'atomics/Image';
import { FC, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { isFulfilled } from '@reduxjs/toolkit';

interface Props {
  data: {
    photos: [];
  };
}
const { useBreakpoint } = Grid;
const LoadedImages: FC<Props> = ({ data }) => {
  const router = useRouter();
  const didMount = useRef(true);
  const { photos = [] } = data;
  const screen = useBreakpoint();

  const [page, setPage] = useState(1);

  const [listImage, setListImage] = useState(photos);

  //Listen to Scroll //
  useEffect(() => {
    const handleScroll = (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        console.log('hihi');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //Set True if reach Buttom//

  useEffect(() => {
    didMount.current = false;
  }, []);

  useEffect(() => {
    const pushRouter = (renderQuery: any) => {
      return router.push({
        pathname: '/pexels',
        query: {
          ...router.query,
          ...renderQuery,
        },
      });
    };

    const queryCnt = {
      page,
    };

    if (!didMount.current) {
      pushRouter(queryCnt);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (page) setListImage((prev) => [...prev, ...photos]);
  }, [photos]);

  return (
    <div className="Images">
      {listImage.map((item) => {
        const { src: { large = '' } = {}, id = '' } = item;
        return (
          <div key={id} className="container">
            <CustomImage
              className="img"
              key={id}
              width={screen.lg ? 250 : 200}
              height={screen.lg ? 400 : 300}
              a={id}
              src={large}
              alt=""
            />
            <div className="overlay"></div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadedImages;
