import { FC } from 'react';
import { Input } from 'antd';
const { Search } = Input;
interface Props {
  onSearch: () => void;
}
const InputSearch: FC<Props> = ({ onSearch }) => {
  return (
    <Search
      placeholder="Search for free photos"
      allowClear
      onSearch={onSearch}
    />
  );
};

export default InputSearch;
