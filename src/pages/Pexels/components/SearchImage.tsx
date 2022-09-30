import { FC } from 'react';
import { Typography } from 'antd';
import InputSearch from 'atomics/Search';

const SearchImage: FC = () => {
  const onSearch = () => {};
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
