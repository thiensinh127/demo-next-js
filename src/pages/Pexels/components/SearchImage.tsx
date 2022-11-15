import { FC } from 'react';
import { Typography } from 'antd';
import { useRouter } from 'next/router';
import InputSearch from 'atomics/Search';

const SearchImage: FC = () => {
  const router = useRouter();

  const onSearch = (value: any) => {
    pushRouter({
      search: value,
    });

    console.log('🚀 ~ e', value);
  };

  const pushRouter = (renderQuery: any) => {
    return router.push({
      pathname: '/pexels',
      query: {
        ...router.query,
        ...renderQuery,
      },
    });
  };
  return (
    <div className="SearchImage">
      <Typography.Title>
        The best free stock photos, royalty free images & videos shared by
        creators.
      </Typography.Title>
      <InputSearch onSearch={onSearch} />
    </div>
  );
};

export default SearchImage;
