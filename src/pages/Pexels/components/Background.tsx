import CustomImage from 'atomics/Image';
import { FC } from 'react';
import Img_Background from '../../../../public/images/backGround.jpeg';
import SearchImage from './SearchImage';

const Background: FC = () => {
  return (
    <div className="Background">
      <CustomImage src={Img_Background} layout="fill" alt="" />
      <div className="overlay" />
      <SearchImage />
    </div>
  );
};

export default Background;
