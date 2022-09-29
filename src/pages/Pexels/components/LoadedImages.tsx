import { Card } from 'antd';
import CustomImage from 'atomics/CustomImage';
import { FC } from 'react';

interface Props {
  data: {
    photos: [];
  };
}

const LoadedImages: FC<Props> = ({ data }) => {
  const { photos = [] } = data;

  const numberImage = Math.floor(photos.length / 3);
  const column1 = photos.length ? photos.slice(0, numberImage) : [];
  const column2 = photos.length
    ? photos.slice(numberImage + 1, numberImage + 1 + numberImage)
    : [];
  const column3 = photos.length
    ? photos.slice(numberImage + 2 + numberImage, photos.length - 1)
    : [];

  return (
    <div className="Images">
      {/* <div className="items1">
        {column1.map((item) => {
          const { src: { medium = '', large = '' } = {}, id = '' } = item;
          return (
            <div  key={id} className="container">
              <img src={large} alt="" />
              <div className="overlay"></div>
            </div>
          );
        })}
      </div>
      <div className="items2">
        {column2.map((item) => {
          const { src: { medium = '', large = '' } = {}, id = '' } = item;
          return <img key={id} src={large} alt="" />;
        })}
      </div>
      <div className="items3">
        {column3.map((item) => {
         photos;
        })}
      </div> */}
      {photos.map((item)=>{
          const { src: { large = '' } = {}, id = '' } = item;
          return <CustomImage key={id} src={large} alt="" />;
      })}
    </div>
  );
};

export default LoadedImages;
